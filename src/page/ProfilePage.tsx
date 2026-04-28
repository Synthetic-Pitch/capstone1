import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hook";
import { useSupabaseLogin } from "../services/SupabaseUserLogin";
import { useNavigate } from "react-router-dom";
import LoadingModal from "../components/Loading-Modal";

const ProfilePage = () => {
    const [data, setData] = useState<any>(null);
    const [notFound, setNotFound] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    const storedPlate = sessionStorage.getItem("plateNumber");

    const plateNumber =
        useAppSelector((state) => state.userInput.plateNumber) || storedPlate;

    const { isLoading, isSuccess, refetch, isError } =
        useSupabaseLogin(plateNumber || "");

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setData(null);
            setNotFound(false);
            setIsFetching(true);

            try {
                const res = await refetch();

                if (res.error) {
                    if (res.error.message === "Plate number not found") {
                        setNotFound(true);
                    } else {
                        throw new Error(res.error.message);
                    }
                } else {
                    setData(res.data ?? null);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setIsFetching(false);
            }
        };

        fetchData();
    }, [refetch]);

    const dataReady =
        !isFetching && !isLoading && isSuccess && data !== null;

    const transactionStatus =
        data?.TRANSACTION?.transaction_status ?? null;

    const displayValue = (value: any) => {
        if (isError || value === null || value === undefined) return " N/A";
        return ` ${value}`;
    };

    return (
        <div className="bg-[#cbe0f2] min-h-screen overflow-y-auto">
            <section className="hidden desktop:flex flex-col items-center w-full min-h-screen py-2 pb-10">
                <h1 className="font-bold py-4">VEHICLE INFORMATION</h1>

                <hr className="w-[90%] max-w-300 bg-black h-0.5" />

                <div className="w-full max-w-300 py-4 px-6 flex text-md gap-4">
                    <div className="w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold">
                        Plate-Number :
                        <span className="font-normal">
                            {" "}
                            {plateNumber}
                        </span>
                    </div>

                    <div className="w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold">
                        Vehicle Color :
                        <span className="font-normal">
                            {displayValue(data?.vehicle_color)}
                        </span>
                    </div>
                </div>

                <div className="w-full max-w-300 py-4 px-6 flex text-md gap-4">
                    <div className="w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold">
                        Vehicle Type :
                        <span className="font-normal">
                            {displayValue(data?.vehicle_type)}
                        </span>
                    </div>

                    <div className="w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold">
                        Vehicle Model :
                        <span className="font-normal">
                            {displayValue(data?.vehicle_model)}
                        </span>
                    </div>
                </div>

                <h1 className="font-bold py-4">DRIVER INFORMATION</h1>

                <hr className="w-[90%] max-w-300 bg-black h-0.5" />

                <div className="w-full max-w-300 py-4 px-6 flex text-md gap-4">
                    <div className="w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold">
                        Name :
                        <span className="font-normal">
                            {displayValue(data?.driver_name)}
                        </span>
                    </div>

                    <div className="w-1/2 bg-[#a4bcde] px-4 py-2 font-semibold">
                        Address :
                        <span className="font-normal">
                            {displayValue(data?.driver_address)}
                        </span>
                    </div>
                </div>

                <div className="font-bold py-4 bg-[#0b318f] text-white w-full">
                    <div className="flex max-w-300 m-auto justify-evenly text-start">
                        <div className="w-[30%]">Violation List</div>
                        <div className="w-[30%]">Issued Location</div>
                        <div className="w-[30%]">Issued Date</div>
                    </div>
                </div>

                <div className="w-full max-w-300 py-4 text-md">
                    {dataReady &&
                        data?.VIOLATION?.map(
                            (item: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex justify-evenly w-full py-1"
                                >
                                    <div className="w-[30%]">
                                        {item.violation}
                                    </div>

                                    <div className="w-[30%]">
                                        {item.issued_location}
                                    </div>

                                    <div className="w-[30%]">
                                        {item.issued_date}
                                    </div>
                                </div>
                            )
                        )}

                    {notFound && (
                        <div className="px-6">no record found</div>
                    )}
                </div>

                <hr className="w-[90%] max-w-300 bg-black h-0.5" />

                <div className="flex w-full max-w-300 px-8 text-xl py-8 justify-between">
                    <div >
                        Transaction Status :
                        {dataReady && transactionStatus && (
                            <span className="font-bold">
                                {" "}
                                {transactionStatus}
                            </span>
                        )}

                        {dataReady &&
                            !transactionStatus &&
                            !notFound && (
                                <span className="font-normal">
                                    {" "}
                                    no transaction
                                </span>
                            )}
                            {notFound && (
                                <span className="font-normal">
                                    {" "}
                                    no transaction
                                </span>
                            )}
                    </div>
                    <div className="mr-70 flex gap-2">
                        <span className="">total-amount</span> :
                        {dataReady && (
                            <span className=" font-bold"> &#8369; {data?.TRANSACTION.total_amount}</span>
                        )}
                    </div>
                </div>

                <footer className="flex justify-center items-center pb-10">
                    {dataReady && !notFound && (
                        <>
                            {transactionStatus === "unsettle" && (
                                <div className="w-100 h-14 bg-[#00167a] rounded-2xl flex justify-center items-center hover:scale-105 transition-all duration-200">
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/process-violation/${plateNumber}`
                                            )
                                        }
                                        className="text-2xl text-white cursor-pointer"
                                    >
                                        process violation
                                    </button>
                                </div>
                            )}

                            {transactionStatus === "approved" && (
                                <div className="w-100 h-14 bg-[#00167a] rounded-2xl flex justify-center items-center hover:scale-105 transition-all duration-200">
                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/pay-violation/${plateNumber}`
                                            )
                                        }
                                        className="text-2xl text-white cursor-pointer w-full h-full"
                                    >
                                        pay now
                                    </button>
                                </div>
                            )}

                            {/* pending = no button */}
                        </>
                    )}
                </footer>
            </section>
        
            <LoadingModal isOpen={isFetching || isLoading} />
        </div>
    );
};

export default ProfilePage;