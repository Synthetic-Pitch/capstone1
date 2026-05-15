import {useSupabaseLogin} from "../services/SupabaseUserLogin";
import {setTrueIsRotating,setFalseIsRotating} from "../store/slices/user-input-slice";
import { useDispatch } from "react-redux";
import {setYesErrorOccur,setNotErrorOccur} from "../store/slices/user-input-slice";
import {validatePlateNumber} from "../utils/validateUser";
import { useAppSelector } from "../store/hook";

import { useNavigate } from "react-router-dom";

const PlateNumBtn = () => {
    const dispatch = useDispatch();
    const Platenumber = useAppSelector((state)=>state.userInput.plateNumber);  
    const { refetch } = useSupabaseLogin(Platenumber);
    const navigate = useNavigate();
    
    const handleClick = async () => {
        // Validate first
        if(validatePlateNumber(Platenumber).error){
            dispatch(setYesErrorOccur());
            return;
        }
        // If valid, proceed with the request
        if(validatePlateNumber(Platenumber).isValid){
            dispatch(setNotErrorOccur());
            dispatch(setTrueIsRotating());
            const res =  await refetch();
            if(res.status === "success"){
                dispatch(setFalseIsRotating());
                navigate(`/profile/${Platenumber}`);
            }
            if(res.status === "error"){
                console.log(res.error.message);
                dispatch(setFalseIsRotating());
                navigate(`/profile/${Platenumber}`);
            }
        }
    };

    return (
        <>  
            <button 
                onClick={handleClick}
                className='text-white text-xl bg-[#00167a] px-20 py-4 font-family-noto-kr hover:scale-105 transition-all duration-205 cursor-pointer'
            >
                enter
            </button>
        </>
    );
};

export default PlateNumBtn;