import { IoMdArrowRoundForward } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import {useAppSelector} from '../store/hook';
const IsRotating = () => {
    const isRotating = useAppSelector((state)=>state.userInput.isRotating);
    return (
        <div>
            {
                isRotating ? (
                    <FaArrowRotateRight  size={40} color='#00167a' className="animate-spin"/>
                ):(
                    <IoMdArrowRoundForward size={50} color='#00167a'/>
                )
            }
        </div>
    );
};

export default IsRotating;