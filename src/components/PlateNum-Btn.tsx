import {useSupabaseLogin} from "../services/SupabaseUserLogin";
import {setTrueIsRotating,setFalseIsRotating} from "../store/slices/user-input-slice";
import { useDispatch } from "react-redux";
import {setYesErrorOccur,setNotErrorOccur} from "../store/slices/user-input-slice";
import {validatePlateNumber} from "../utils/validateUser";
import { useAppSelector } from "../store/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlateNumBtn = () => {
    const dispatch = useDispatch();
    const Platenumber = useAppSelector((state)=>state.userInput.plateNumber);  
    const {data, refetch, isLoading, isSuccess, isFetching} = useSupabaseLogin(Platenumber);
    const navigate = useNavigate();
    // Watch for loading state changes
    useEffect(() => {
        if (isLoading || isFetching) {
            dispatch(setTrueIsRotating());
        } else {
            dispatch(setFalseIsRotating());
        }
    }, [isLoading, isFetching]);

   const handleClick = async () => {
        // Validate first
        if(validatePlateNumber(Platenumber).error){
            dispatch(setYesErrorOccur());
            return;
        }
        
        if(validatePlateNumber(Platenumber).isValid){
            dispatch(setNotErrorOccur());
            const result = await refetch();
            
            // Navigate only after successful fetch
            if (result.isSuccess && result.data) {
                console.log("Data received:", result.data);
                navigate(`/profile/${Platenumber}`);
            }
        }
    };

    // Remove the navigate useEffect completely
    useEffect(() => {
        if (isSuccess && data) {
            console.log("Data received:", data);
            // Don't navigate here
        }
    }, [isSuccess, data]);

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