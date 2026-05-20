import { useState } from "react";
import { useSubmit } from "../hook/useCustomHook";
import LoadingModal from "../components/Loading-Modal";

const ProcessViolation = () => {
    // File objects — for sending to server
    const [file1, setFile1] = useState<File | null>(null);
    const [file2, setFile2] = useState<File | null>(null);
    
    // Blob URLs — for displaying preview only
    const [preview1, setPreview1] = useState<string | null>(null);
    const [preview2, setPreview2] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { handleSubmit } = useSubmit({ file1, file2, setFile1, setFile2, setPreview1, setPreview2 });

    const handleImg1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFile1(file);                              // store File for upload
        setPreview1(URL.createObjectURL(file));      // store blob URL for preview
    };

    const handleImg2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setFile2(file);
        setPreview2(URL.createObjectURL(file));
    };
    
    const deleteImg1 = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (preview1) URL.revokeObjectURL(preview1);
        setFile1(null);
        setPreview1(null);
        const input = document.getElementById("input-driver-license") as HTMLInputElement;
        if (input) input.value = "";
    };

    const deleteImg2 = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (preview2) URL.revokeObjectURL(preview2);
        setFile2(null);
        setPreview2(null);
        const input = document.getElementById("input-ovr") as HTMLInputElement;
        if (input) input.value = "";
    };

    const onSubmit = async () => {
        setIsSubmitting(true);
        try {
            await handleSubmit();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-dvh w-full bg-[#cbe0f2] flex flex-col items-center">
            <p className="font-family-poppins text-xl py-4 text-white w-dvw bg-[#0b318f] px-4 text-center">
                Submit the following documents:
            </p>
            <section className="max-w-300 w-full py-12 px-4 flex flex-col">
                <section className="font-family-poppins w-full py-4 px-4 flex flex-col desktop:flex-row justify-center gap-6">

                    {/* Driver's License Upload */}
                    <div className="w-full desktop:w-[40%] bg-[#a4bcde] h-70 tablet:h-100 flex flex-col items-center rounded-4xl overflow-hidden ">
                        <h1 className="text-center py-4 px-2 text-sm tablet:text-[16px]">
                            Driver's license - if confiscated 1 valid ID
                        </h1>
                        <div className="relative w-full h-full">
                            <label
                                htmlFor="input-driver-license"
                                className={`bg-[#ffffff] w-full h-full flex justify-center items-center overflow-hidden ${!preview1 ? "cursor-pointer" : ""}`}
                            >
                                {preview1 ? (
                                    <img
                                        src={preview1}  // ← use preview blob URL for display
                                        alt="Driver's License Preview"
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-gray-400 text-sm select-none">
                                        Click to import
                                    </span>
                                )}
                            </label>
                            {preview1 && (
                                <button
                                    onClick={deleteImg1}
                                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
                                    title="Remove image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <input
                            id="input-driver-license"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImg1}
                        />
                    </div>

                    {/* OVR Upload */}
                    <div className="w-full desktop:w-[40%] bg-[#a4bcde] h-70 tablet:h-100 flex flex-col items-center rounded-4xl overflow-hidden">
                        <h2 className="text-center py-4 px-2 text-sm tablet:text-[16px]">
                            OVR - Ordinance Violation Receipt
                        </h2>
                        <div className="relative w-full h-full">
                            <label
                                htmlFor="input-ovr"
                                className={`bg-[#ffffff] w-full h-full flex justify-center items-center overflow-hidden ${!preview2 ? "cursor-pointer" : ""}`}
                            >
                                {preview2 ? (
                                    <img
                                        src={preview2}  // ← use preview blob URL for display
                                        alt="OVR Preview"
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-gray-400 text-sm select-none">
                                        Click to import
                                    </span>
                                )}
                            </label>
                            {preview2 && (
                                <button
                                    onClick={deleteImg2}
                                    className="absolute top-2 right-2 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer z-10"
                                    title="Remove image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <input
                            id="input-ovr"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImg2}
                        />
                    </div>
                </section>
                    {file1 && file2 && (
                        <button
                            onClick={onSubmit}
                            className="text-2xl bg-[#0b318f] max-w-min m-auto px-42 py-4 text-white rounded-2xl mt-12 cursor-pointer hover:scale-[1.05] transition-all duration-100"
                        >
                            submit
                        </button>
                    )}
                </section>
            <LoadingModal isOpen={isSubmitting} />
        </div>
    );
};

export default ProcessViolation;