import {useAppSelector,useAppDispatch} from '../store/hook'
import {setYesErrorOccur,setNotErrorOccur} from '../store/slices/user-input-slice'
import {validatePlateNumber} from "../utils/validateUser";
const PlateNumBtn = () => {
    const PlateNumber = useAppSelector((state)=>state.userInput.plateNumber);
    const dispatch = useAppDispatch()
    const handleClick = () => {
        
        if(validatePlateNumber(PlateNumber).error){
            dispatch(setYesErrorOccur());
        }else{
            dispatch(setNotErrorOccur());
        }
        
        if(validatePlateNumber(PlateNumber).isValid){
           
        }
    };
    
    return (
        <button 
            onClick={handleClick}
            className='text-white text-xl bg-[#00167a] px-10 py-2 font-family-noto-kr hover:scale-105 transition-all duration-205 cursor-pointer'
        >enter</button>
    );
};

export default PlateNumBtn;