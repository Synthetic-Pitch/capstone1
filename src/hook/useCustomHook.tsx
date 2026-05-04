import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

interface UseSubmitProps {
    file1: File | null;
    file2: File | null;
    setFile1: React.Dispatch<React.SetStateAction<File | null>>;
    setFile2: React.Dispatch<React.SetStateAction<File | null>>;
    setPreview1: React.Dispatch<React.SetStateAction<string | null>>;
    setPreview2: React.Dispatch<React.SetStateAction<string | null>>;
}

interface PaymentSubmitProps {
    payment_method: string;
    phone: string | undefined;
    plate_number: string;
}

interface PaymentResponse {
    intent_id: string;
    transaction_id: string;
    redirect_url: string;
}

const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const BASE_URL  = "https://gbvpdhqscwuaymsddvms.supabase.co/functions/v1";

// ── useSubmit (unchanged logic, same raw fetch) ──────────────────────────────
export const useSubmit = ({ file1, file2, setFile1, setFile2, setPreview1, setPreview2 }: UseSubmitProps) => {
    const plateNumber = sessionStorage.getItem("plateNumber") || null;
    const navigate = useNavigate();

    const handleSubmit = useCallback(async () => {
        if (!file1 || !file2 || !plateNumber) {
            console.error("Both images and plate number are required");
            return;
        }

        const formData = new FormData();
        formData.append("image1", file1);
        formData.append("image2", file2);
        formData.append("plate_number", plateNumber);

        const response = await fetch(`${BASE_URL}/request-submit`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${ANON_KEY}` },
            body: formData,
        });

        if (!response.ok) {
            const err = await response.json();
            console.error("Submission failed:", err.error);
            return;
        }

        setFile1(null);
        setFile2(null);
        setPreview1(null);
        setPreview2(null);

        const input1 = document.getElementById("input-driver-license") as HTMLInputElement;
        const input2 = document.getElementById("input-ovr") as HTMLInputElement;
        if (input1) input1.value = "";
        if (input2) input2.value = "";

        navigate(`/profile/${plateNumber}`);
    }, [file1, file2, plateNumber, setFile1, setFile2, setPreview1, setPreview2]);

    return { handleSubmit };
};

// ── useSubmitPayment (TanStack useMutation) ───────────────────────────────────
const submitPaymentFn = async ({ payment_method, phone, plate_number }: PaymentSubmitProps): Promise<PaymentResponse> => {
    const response = await fetch(`${BASE_URL}/pay-fines`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${ANON_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ plate_number, payment_method, phone }),
    });
    
    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error ?? "Payment request failed");
    }
    const data = await response.json();
    console.log(data);
    
    return data as Promise<PaymentResponse>;
};

export const useSubmitPayment = () => {
    return useMutation({
        mutationFn: submitPaymentFn,
        onSuccess: (data) => {
            window.location.href = data.redirect_url;
        },
        onError: (error) => {
            console.error("Payment failed:", error.message);
        },
    });
};

// ── useVerifyPayment (TanStack useMutation) ───────────────────────────────────
interface VerifyPaymentProps {
    intent_id: string;
    transaction_id: string;
    plate_number: string;
    payment_method: string;
}

interface VerifyPaymentResponse {
    success: boolean;
    message: string;
}

const verifyPaymentFn = async ({ intent_id, transaction_id, plate_number,payment_method }: VerifyPaymentProps): Promise<VerifyPaymentResponse> => {
    const response = await fetch(`${BASE_URL}/verify-payment`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${ANON_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ intent_id, transaction_id, plate_number, payment_method }),
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error ?? "Verification failed");
    }

    return response.json() as Promise<VerifyPaymentResponse>;
};

export const useVerifyPayment = () => {
    return useMutation({
        mutationFn: verifyPaymentFn,
        onError: (error) => {
            console.error("Verification failed:", error.message);
        },
    });
};