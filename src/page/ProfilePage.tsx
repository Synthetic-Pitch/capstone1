import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import { useEffect } from "react";

const ProfilePage = () => {
    const navigate = useNavigate()
    const storedPlate = sessionStorage.getItem("plateNumber")
    const plateNumber = useAppSelector((state) => state.userInput.plateNumber) || storedPlate
    
    useEffect(() => {
        if (!plateNumber) {
            navigate("/");
        }
    }, [plateNumber]);
    
    return (
        <div className="bg-[#cbe0f2] h-dvh">
            <section className="hidden desktop:flex flex-col items-center w-full h-dvh max-h-220 py-2">
                <h1 className="font-bold py-4">VEHICLE INFORMATION</h1>
                <hr className="w-[90%] max-w-300 bg-black h-0.5"/>
                <div className=" w-full max-w-300 py-4 px-6 flex text-md gap-4" >
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2  font-bold">Plate-Number : 
                        <span className="">{plateNumber}</span>
                    </div>
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2">Name :</div> 
                </div>
                <div className=" w-full max-w-300 py-4 px-6 flex text-md font-bold gap-4" >
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2">Vehicle Type :</div>
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2">Vehicle Model :</div> 
                </div>
                <h1 className="font-bold py-4">LICENSE STATUS</h1>
                <hr className="w-[90%] max-w-300 bg-black h-0.5"/>
                <div className="w-full max-w-300 py-4 px-6 flex text-md font-bold gap-4">
                    <div className="h-fit w-1/2 bg-[#a4bcde] px-4 py-2">Active</div>
                </div>
                <h1 className="font-bold py-4 bg-[#0b318f] text-center text-white w-full ">VIOLATIONS LIST</h1>
                <ul className=" w-full max-w-300 py-4 px-6 flex flex-col text-md font-bold gap-4" >
                    <li>• Iligal Parking</li>
                    <li>• Obstruction</li>
                    <li>• No Side Mirror</li>
                </ul>
                <hr className="w-[90%] max-w-300 bg-black h-0.5"/>
                <div className="flex w-full max-w-300 px-8 text-xl py-8">
                    <h1 className="font-bold">Transaction Status : PENDING</h1>
                </div>
                <footer className="flex justify-center items-center">
                    <button className="font-bold text-xl bg-[#0b318f] text-white px-20 py-2 rounded-xl cursor-pointer">PROCESS VIOLATION</button>
                </footer>
            </section>
        </div>
    );
};

export default ProfilePage;