import {useSupabaseLogin} from "../services/SupabaseUserLogin";
import {setTrueIsRotating,setFalseIsRotating} from "../store/slices/user-input-slice";
import { useDispatch } from "react-redux";
import {setYesErrorOccur,setNotErrorOccur} from "../store/slices/user-input-slice";
import {validatePlateNumber} from "../utils/validateUser";
import { useAppSelector } from "../store/hook";
import { useEffect } from "react";

const PlateNumBtn = () => {
    const dispatch = useDispatch();
    const Platenumber = useAppSelector((state)=>state.userInput.plateNumber);  
    const {data, refetch, isLoading, isSuccess, isFetching} = useSupabaseLogin(Platenumber);
    
    // Watch for loading state changes
    useEffect(() => {
        if (isLoading || isFetching) {
            dispatch(setTrueIsRotating());
        } else {
            dispatch(setFalseIsRotating());
        }
    }, [isLoading, isFetching]);

    // Watch for success and log data
    useEffect(() => {
        if (isSuccess && data) {
            console.log("Data received:", data);
        }
    }, [isSuccess, data]);

    const handleClick = () => {
        // Validate first
        if(validatePlateNumber(Platenumber).error){
            dispatch(setYesErrorOccur());
            return; // Don't proceed if invalid
        }
        
        if(validatePlateNumber(Platenumber).isValid){
            dispatch(setNotErrorOccur());
            refetch(); // Only refetch if valid
        }
    };

    return (
        <>  
            <button 
                onClick={handleClick}
                className='text-white text-xl bg-[#00167a] px-10 py-2 font-family-noto-kr hover:scale-105 transition-all duration-205 cursor-pointer'
            >
                enter
            </button>
        </>
    );
};

export default PlateNumBtn;