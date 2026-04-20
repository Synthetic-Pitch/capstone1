import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hook";
import { useSupabaseLogin } from "../services/SupabaseUserLogin";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const [data, setData] = useState<any>(null);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    const storedPlate = sessionStorage.getItem("plateNumber");
    const plateNumber = useAppSelector((state) => state.userInput.plateNumber) || storedPlate;

    const { isLoading, isSuccess, refetch, isError } = useSupabaseLogin(plateNumber || "");
    const navigate = useNavigate();
    
    useEffect(() => {

        setData(null);
        setNotFound(false);
        setIsFetching(true);

        const fetchData = async () => {
            try {
                const res = await refetch();
                if (res.error) {
                    if (res.error.message === "Plate number not found") {
                        setNotFound(true);
                    } else {
                        setNotFound(false);
                        throw new Error(res.error.message);
                    }
                } else {
                    setData(res.data ?? null);
                }
            } catch (err) {
                console.error("An error occurred while fetching data", err);
            } finally {
                setIsFetching(false);
            }
        };

        fetchData();
    }, []);

    const dataReady = !isFetching && !isLoading && isSuccess && data !== null;
    const transactionStatus = data?.TRANSACTION?.transaction_status ?? null;

    const displayValue = (value: any) => {
        if (isFetching || isLoading) return " loading...";
        if (isError || value === null || value === undefined) return " N/A";
        return ` ${value}`;
    };

    return (
        <div className="bg-[#cbe0f2] h-dvh">
            <section className="hidden desktop:flex flex-col items-center w-full h-dvh max-h-220 py-2">
                <h1 className="font-bold py-4">VEHICLE INFORMATION</h1>
                <hr className="w-[90%] max-w-300 bg-black h-0.5" />

                <div className="w-full max-w-300 py-4 px-6 flex text-md gap-4">
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2 font-family-poppins font-semibold">
                        Plate-Number :
                        <span className="font-normal"> {plateNumber}</span>
                    </div>
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold font-family-poppins">
                        Vehicle Color :
                        <span className="font-normal">{displayValue(data?.vehicle_color)}</span>
                    </div>
                </div>

                <div className="w-full max-w-300 py-4 px-6 flex text-md font-family-poppins gap-4">
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold">
                        Vehicle Type :
                        <span className="font-normal">{displayValue(data?.vehicle_type)}</span>
                    </div>
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2 font-family-poppins font-semibold">
                        Vehicle Model :
                        <span className="font-normal">{displayValue(data?.vehicle_model)}</span>
                    </div>
                </div>

                <h1 className="font-bold py-4">DRIVER INFORMATION</h1>
                <hr className="w-[90%] max-w-300 bg-black h-0.5" />

                <div className="w-full max-w-300 py-4 px-6 flex text-md font-bold gap-4">
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2 font-family-poppins font-semibold">
                        Name :
                        <span className="font-normal">{displayValue(data?.driver_name)}</span>
                    </div>
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2 font-family-poppins font-semibold">
                        Address :
                        <span className="font-normal">{displayValue(data?.driver_address)}</span>
                    </div>
                </div>

                <div className="font-bold py-4 bg-[#0b318f] text-center text-white w-full">
                    <div className="flex max-w-300 m-auto justify-evenly text-start">
                        <div className="w-[30%]">violation list</div>
                        <div className="w-[30%]">issued location</div>
                        <div className="w-[30%]">issued date</div>
                    </div>
                </div>
        
                <section className="w-full max-w-300 py-4 text-md font-family-poppins">
                    {(isFetching || isLoading) && <div className="px-6">loading...</div>}
                    {dataReady && data?.VIOLATION?.map((item: any, index: number) => (
                        <main key={index} className="flex justify-evenly w-full">
                            <div className="w-[30%]">{item.violation}</div>
                            <div className="w-[30%]">{item.issued_location}</div>
                            <div className="w-[30%]">{item.issued_date}</div>
                        </main>
                    ))}
                    {notFound && <div className="px-6">no record found</div>}
                </section>

                <hr className="w-[90%] max-w-300 bg-black h-0.5" />

                <div className="flex w-full max-w-300 px-8 text-xl py-8">
                    <div className="font-family-poppins font-bold">
                        Transaction Status :
                        {(isFetching || isLoading) && <span className="font-normal"> loading...</span>}
                        {dataReady && transactionStatus && (
                            <span className="font-normal"> {transactionStatus}</span>
                        )}
                        {notFound && <span className="font-normal"> no transaction</span>}
                    </div>
                </div>

                <footer className="flex justify-center items-center">
                    {dataReady && !notFound && transactionStatus && (
                        <div className="w-100 h-14 bg-[#00167a] rounded-2xl flex justify-center items-center cursor-pointer select-none">
                            {transactionStatus === "unsettle" && (
                                <button
                                    onClick={() => navigate(`/process-violation/${plateNumber}`)}
                                    className="text-2xl text-white font-family-poppins cursor-pointer"
                                >
                                    process violation
                                </button>
                            )}
                            {transactionStatus === "pending" && (
                                <button className="text-2xl text-white font-family-poppins cursor-pointer">
                                    pay violation
                                </button>
                            )}
                        </div>
                    )}
                </footer>
            </section>
        </div>
    );
};

export default ProfilePage;