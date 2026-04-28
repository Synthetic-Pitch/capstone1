import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface UseSubmitProps {
    file1: File | null;
    file2: File | null;
    setFile1: React.Dispatch<React.SetStateAction<File | null>>;
    setFile2: React.Dispatch<React.SetStateAction<File | null>>;
    setPreview1: React.Dispatch<React.SetStateAction<string | null>>;
    setPreview2: React.Dispatch<React.SetStateAction<string | null>>;
}

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
        
        const response = await fetch("https://gbvpdhqscwuaymsddvms.supabase.co/functions/v1/request-submit", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
            },
            body: formData,
        });

        if (!response.ok) {
            const err = await response.json();
            console.error("Submission failed:", err.error);
            return;
        }
        // Clear everything after success
        setFile1(null);
        setFile2(null);
        setPreview1(null);
        setPreview2(null);
        
        // Reset file inputs
        const input1 = document.getElementById("input-driver-license") as HTMLInputElement;
        const input2 = document.getElementById("input-ovr") as HTMLInputElement;
        if (input1) input1.value = "";
        if (input2) input2.value = "";
        navigate(`/profile/${plateNumber}`);
    }, [file1, file2, plateNumber, setFile1, setFile2, setPreview1, setPreview2]);

    return { handleSubmit };
};