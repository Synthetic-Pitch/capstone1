import { Card } from "../components/ui/card";
import PhoneInput from 'react-phone-number-input';
import { useState, forwardRef, useRef, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import gcashIcon from "../assets/icons/gcash.png";
import paymaya from "../assets/icons/paymaya.png";
import grabPay from "../assets/icons/grabPay.png";
import shopeePay from "../assets/icons/shopeePay.png";
import React from 'react';
import gsap from 'gsap';
import {useSubmitPayment} from "../hook/useCustomHook"

const LimitedInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    (props, ref) => (
        <input {...props} ref={ref} maxLength={13} className="placeholder:text-gray-400 text-[16px] placeholder:text-[16px] outline-none border-0 w-full" />
    )
);

const paymentOptions = [
    { id: "gcash",      src: gcashIcon,  alt: "GCash" },
    { id: "paymaya",    src: paymaya,    alt: "PayMaya" },
    { id: "grab_pay",   src: grabPay,    alt: "GrabPay" },
    { id: "shopee_pay", src: shopeePay,  alt: "ShopeePay" },
];

const MAX_OFFSET = 48;
const TRIGGER_RADIUS = 80;

const PayViolation = () => {
    const [phone, setPhone] = useState<string | undefined>('');
    const [paymentMethod, setPaymentMethod] = useState<string>('');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const cardRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const naturalCenterRef = useRef<{ x: number; y: number } | null>(null);
    const inTriggerZoneRef = useRef(false);
    const user_id = sessionStorage.getItem("plateNumber") || "";
    const { mutate: submitPayment } = useSubmitPayment();
    
    const isReady = paymentMethod.length > 0 && (phone?.length ?? 0) > 0;

    // Shared helper — always resets transform to zero first so we read the true layout position
    const captureNaturalCenter = () => {
        if (!buttonRef.current) return;
        // Temporarily zero out any active transform so getBoundingClientRect reflects real layout
        gsap.set(buttonRef.current, { x: 0, y: 0 });
        const r = buttonRef.current.getBoundingClientRect();
        naturalCenterRef.current = {
            x: r.left + r.width / 2,
            y: r.top + r.height / 2,
        };
    };

    // Capture on mount
    useEffect(() => {
        captureNaturalCenter();
    }, []);

    // Recapture on resize — ResizeObserver on the card detects layout shifts
    useEffect(() => {
        if (!cardRef.current) return;

        const observer = new ResizeObserver(() => {
            // Reset button position, recapture, and reset trigger zone state
            inTriggerZoneRef.current = false;
            captureNaturalCenter();
        });

        observer.observe(cardRef.current);

        // Also handle window resize (e.g. scrollbar appearing/disappearing shifts page coords)
        const onWindowResize = () => {
            inTriggerZoneRef.current = false;
            captureNaturalCenter();
        };
        window.addEventListener('resize', onWindowResize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    useEffect(() => {
        const selectedIndex = paymentOptions.findIndex(p => p.id === paymentMethod);
        if (selectedIndex === -1 || !containerRef.current) return;
        const item = itemRefs.current[selectedIndex];
        const container = containerRef.current;
        if (!item) return;
        const itemRect = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setIndicatorStyle({
            left: itemRect.left - containerRect.left,
            width: itemRect.width,
        });
    }, [paymentMethod]);

    useEffect(() => {
        if (!buttonRef.current) return;
        if (isReady) {
            gsap.to(buttonRef.current, {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: "back.out(1.7)",
                overwrite: true,
            });
        }
    }, [isReady]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isReady || !buttonRef.current || !naturalCenterRef.current) return;

        const nat = naturalCenterRef.current;
        const dist = Math.hypot(e.clientX - nat.x, e.clientY - nat.y);

        if (dist > TRIGGER_RADIUS) {
            if (inTriggerZoneRef.current) {
                inTriggerZoneRef.current = false;
                gsap.to(buttonRef.current, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.5)",
                    overwrite: true,
                });
            }
            return;
        }

        inTriggerZoneRef.current = true;

        const dx = nat.x - e.clientX;
        const dy = nat.y - e.clientY;
        const len = Math.hypot(dx, dy) || 1;

        const strength = Math.min(MAX_OFFSET, (1 - dist / TRIGGER_RADIUS) * MAX_OFFSET * 1.5);
        const ox = (dx / len) * strength;
        const oy = (dy / len) * strength;

        gsap.to(buttonRef.current, {
            x: ox,
            y: oy,
            duration: 0.25,
            ease: "power2.out",
            overwrite: true,
        });
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;
        inTriggerZoneRef.current = false;
        gsap.to(buttonRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
            overwrite: true,
        });
    };
    
    const confirmPayment = () => {
        if (phone === undefined) return;
        if (paymentMethod.length > 0 && phone?.length > 0) {
            console.log(paymentMethod, phone);
            submitPayment({
                plate_number: user_id,
                phone,
                payment_method: paymentMethod,
            });
        }
    };

    return (
        <div
            className="min-h-dvh w-full bg-[#cbe0f2] flex justify-center items-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <Card className="px-npm 18 py-18 w-120 h-120 bg-[#f8f6f6] relative overflow-visible flex flex-col " ref={cardRef}>
                <h1 className="text-[#909090] text-center font-family-poppins">
                    Plate-number : {user_id}
                </h1>
                <PhoneInput
                    defaultCountry="PH"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    className="font-family-poppins w-[70%] h-[10%] m-auto px-8"
                    inputComponent={LimitedInput}
                />

                <hr />

                <main className="flex flex-col mb-8">
                    <p className="text-[#909090] mb-4 text-[16px] text-center">Choose a payment method</p>

                    <div className="relative" ref={containerRef}>
                        <div className="flex justify-evenly mb-3 py-4">
                            {paymentOptions.map((option, index) => (
                                <div
                                    key={option.id}
                                    ref={el => { itemRefs.current[index] = el; }}
                                    onClick={() => setPaymentMethod(option.id)}
                                    className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                                        paymentMethod === option.id ? "scale-[.85] rounded-full overflow-hidden" : "hover:scale-[.9]"
                                    }`}
                                >
                                    <img
                                        src={option.src}
                                        alt={option.alt}
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {paymentMethod && (
                            <div
                                className="absolute bottom-0 h-0.5 bg-[#00167a] rounded-full transition-all duration-300 ease-in-out"
                                style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                            />
                        )}
                    </div>
                </main>

                <footer className="w-full flex justify-center items-center">
                    <button
                    ref={buttonRef}
                    className={`font-family-poppins transition-colors duration-200 py-4 px-4 text-xl outline-none ${
                        isReady
                            ? "text-[#00167a] font-semibold cursor-pointer"
                            : "text-[#00167a] font-semibold select-none"
                    }`}
                    onClick={confirmPayment}
                    disabled={!isReady}
                    style={{ willChange: "transform" }}
                >
                    confirm
                </button>
                </footer>
            </Card>
        </div>
    );
};

export default PayViolation;