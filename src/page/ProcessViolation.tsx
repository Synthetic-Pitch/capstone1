import { useState } from "react";
import { FileImage, UploadCloud, X } from "lucide-react";
import { useSubmit } from "../hook/useCustomHook";
import LoadingModal from "../components/Loading-Modal";

const ProcessViolation = () => {
    // File objects for sending to server
    const [file1, setFile1] = useState<File | null>(null);
    const [file2, setFile2] = useState<File | null>(null);

    // Blob URLs for displaying preview only
    const [preview1, setPreview1] = useState<string | null>(null);
    const [preview2, setPreview2] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { handleSubmit } = useSubmit({ file1, file2, setFile1, setFile2, setPreview1, setPreview2 });
    
    const handleImg1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (preview1) URL.revokeObjectURL(preview1);
        setFile1(file);
        setPreview1(URL.createObjectURL(file));
    };

    const handleImg2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (preview2) URL.revokeObjectURL(preview2);
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
            <p className="font-family-poppins text-lg tablet:text-xl py-4 text-white w-full bg-[#0b318f] px-4 text-center">
                Submit the following documents:
            </p>

            <section className="max-w-300 w-full py-8 tablet:py-12 px-4 flex flex-col">
                <section className="font-family-poppins w-full py-4 flex flex-col desktop:flex-row justify-center gap-6">
                    <div className="w-full desktop:w-[40%] bg-white border border-[#b4c9e4] rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="min-h-24 bg-[#f4f8fd] px-5 py-4 flex items-start gap-3 border-b border-[#d8e4f2]">
                            <FileImage className="mt-1 h-5 w-5 shrink-0 text-[#0b318f]" />
                            <div>
                                <h1 className="text-sm tablet:text-[16px] font-semibold text-[#0b318f]">
                                    Driver's license
                                </h1>
                                <p className="mt-1 text-xs tablet:text-sm leading-relaxed text-[#51606f]">
                                    If confiscated, upload one valid ID instead.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-64 tablet:h-80 p-4">
                            <label
                                htmlFor="input-driver-license"
                                className={`w-full h-full rounded-xl border-2 border-dashed flex justify-center items-center overflow-hidden transition-colors ${
                                    preview1
                                        ? "border-[#b4c9e4] bg-white"
                                        : "border-[#7f9fc8] bg-[#f8fbff] cursor-pointer hover:border-[#0b318f] hover:bg-white"
                                }`}
                            >
                                {preview1 ? (
                                    <img
                                        src={preview1}
                                        alt="Driver's License Preview"
                                        className="w-full h-full object-contain p-2"
                                    />
                                ) : (
                                    <span className="flex flex-col items-center gap-2 text-[#60748c] text-sm select-none text-center px-4">
                                        <UploadCloud className="h-9 w-9 text-[#0b318f]" />
                                        <span className="font-semibold text-[#0b318f]">Click to upload image</span>
                                        <span className="text-xs">PNG, JPG, or camera photo</span>
                                    </span>
                                )}
                            </label>

                            {preview1 && (
                                <button
                                    onClick={deleteImg1}
                                    className="absolute top-7 right-7 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer z-10 shadow-md"
                                    title="Remove image"
                                    aria-label="Remove driver's license image"
                                >
                                    <X className="h-4 w-4" strokeWidth={2.5} />
                                </button>
                            )}
                        </div>

                        {file1 && (
                            <p className="px-5 pb-4 text-xs text-[#51606f] truncate">
                                Selected: {file1.name}
                            </p>
                        )}

                        <input
                            id="input-driver-license"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImg1}
                        />
                    </div>

                    <div className="w-full desktop:w-[40%] bg-white border border-[#b4c9e4] rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="min-h-24 bg-[#f4f8fd] px-5 py-4 flex items-start gap-3 border-b border-[#d8e4f2]">
                            <FileImage className="mt-1 h-5 w-5 shrink-0 text-[#0b318f]" />
                            <div>
                                <h2 className="text-sm tablet:text-[16px] font-semibold text-[#0b318f]">
                                    OVR receipt
                                </h2>
                                <p className="mt-1 text-xs tablet:text-sm leading-relaxed text-[#51606f]">
                                    If lost, upload a screenshot from Dashboard or Profile showing the violation.
                                </p>
                            </div>
                        </div>

                        <div className="relative h-64 tablet:h-80 p-4">
                            <label
                                htmlFor="input-ovr"
                                className={`w-full h-full rounded-xl border-2 border-dashed flex justify-center items-center overflow-hidden transition-colors ${
                                    preview2
                                        ? "border-[#b4c9e4] bg-white"
                                        : "border-[#7f9fc8] bg-[#f8fbff] cursor-pointer hover:border-[#0b318f] hover:bg-white"
                                }`}
                            >
                                {preview2 ? (
                                    <img
                                        src={preview2}
                                        alt="OVR Preview"
                                        className="w-full h-full object-contain p-2"
                                    />
                                ) : (
                                    <span className="flex flex-col items-center gap-2 text-[#60748c] text-sm select-none text-center px-4">
                                        <UploadCloud className="h-9 w-9 text-[#0b318f]" />
                                        <span className="font-semibold text-[#0b318f]">Click to upload image</span>
                                        <span className="text-xs">PNG, JPG, or camera photo</span>
                                    </span>
                                )}
                            </label>

                            {preview2 && (
                                <button
                                    onClick={deleteImg2}
                                    className="absolute top-7 right-7 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer z-10 shadow-md"
                                    title="Remove image"
                                    aria-label="Remove OVR image"
                                >
                                    <X className="h-4 w-4" strokeWidth={2.5} />
                                </button>
                            )}
                        </div>

                        {file2 && (
                            <p className="px-5 pb-4 text-xs text-[#51606f] truncate">
                                Selected: {file2.name}
                            </p>
                        )}

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
                        className="font-family-poppins text-lg tablet:text-xl bg-[#0b318f] hover:bg-[#08286f] m-auto w-full max-w-100 py-4 text-white rounded-xl mt-8 cursor-pointer desktop:hover:scale-[1.03] transition-all duration-150 shadow-md"
                    >
                        Submit documents
                    </button>
                )}
            </section>

            <LoadingModal isOpen={isSubmitting} />
        </div>
    );
};

export default ProcessViolation;
