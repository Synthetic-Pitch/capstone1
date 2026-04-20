import { useState } from "react";

const ProcessViolation = () => {
    const [image1, setImage1] = useState<string | null>(null);
    const [image2, setImage2] = useState<string | null>(null);

    const handleImg1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const blobUrl = URL.createObjectURL(file);
        setImage1(blobUrl);
    };

    const handleImg2 = (e: React.ChangeEvent<HTMLInputElement>) => {    
        const file = e.target.files?.[0];   
        if (!file) return;  
        const blobUrl = URL.createObjectURL(file);  
        setImage2(blobUrl); 
    };

    const deleteImg1 = (e: React.MouseEvent) => {   
        e.preventDefault(); 
        e.stopPropagation();    
        if (image1) URL.revokeObjectURL(image1);    
        setImage1(null);    
        const input = document.getElementById("input-driver-license") as HTMLInputElement;  
        if (input) input.value = "";    
    };
    
    const deleteImg2 = (e: React.MouseEvent) => {   
        e.preventDefault(); 
        e.stopPropagation();    
        if (image2) URL.revokeObjectURL(image2);    
        setImage2(null);    
        const input = document.getElementById("input-ovr") as HTMLInputElement; 
        if (input) input.value = "";    
    };      

    const handleSubmit = () => {
        if (!image1 || !image2) {
            alert("Please upload both documents before submitting.");
            return;
        }
        console.log(image1,image2);
        
        alert("Documents submitted successfully!");
    };

    return (
        <div className="min-h-dvh w-full bg-[#cbe0f2] flex flex-col items-center ">
            <p className="font-family-poppins text-xl py-4 text-white w-dvw bg-[#0b318f] px-4 text-center">
                Submit the following documents:
            </p>
            <section className="max-w-300 w-full py-12 px-4 flex flex-col">
                <section className="font-family-poppins w-full py-4 px-4 flex flex-col desktop:flex-row justify-center gap-6 ">

                    {/* Driver's License Upload */}
                    <div className="w-full desktop:w-[40%] bg-[#a4bcde] h-100 flex flex-col items-center rounded-4xl overflow-hidden">
                        <h1 className="text-center py-4 px-2">
                            Driver's license - if confiscated 1 valid ID
                        </h1>
                        <div className="relative w-full h-full">
                            <label
                                htmlFor="input-driver-license"
                                className={`bg-[#ffffff] w-full h-full flex justify-center items-center overflow-hidden ${!image1 ? "cursor-pointer" : ""}`}
                            >
                                {image1 ? (
                                    <img
                                        src={image1}
                                        alt="Driver's License Preview"
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-gray-400 text-sm select-none">
                                        Click to import
                                    </span>
                                )}
                            </label>
                            {image1 && (
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
                    <div className="w-full desktop:w-[40%] bg-[#a4bcde] h-100 flex flex-col items-center rounded-4xl overflow-hidden">
                        <h2 className="text-center py-4 px-2">
                            OVR - Ordinance Violation Receipt
                        </h2>
                        <div className="relative w-full h-full">
                            <label
                                htmlFor="input-ovr"
                                className={`bg-[#ffffff] w-full h-full flex justify-center items-center overflow-hidden ${!image2 ? "cursor-pointer" : ""}`}
                            >
                                {image2 ? (
                                    <img
                                        src={image2}
                                        alt="OVR Preview"
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-gray-400 text-sm select-none">
                                        Click to import
                                    </span>
                                )}
                            </label>
                            {image2 && (
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

                {
                    image1 && image2 && (
                        <button
                            onClick={handleSubmit}
                            className="text-2xl bg-[#0b318f] max-w-min m-auto px-42 py-4 text-white rounded-2xl mt-12 cursor-pointer hover:bg-[#0a2a7a] transition-colors"
                        >
                            submit
                        </button>
                    )
                }
            </section>
         
        </div>
    );
};

export default ProcessViolation;