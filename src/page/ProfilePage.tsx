import { useNavigate } from "react-router-dom";
import Img1 from "../assets/images/underConstruction.png";
import { FaArrowRight } from "react-icons/fa";
const ProfilePage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center flex-col mt-20 select-none">   
            <h1 className="text-[2rem] text-white font-family-poetsen animate-bounce">
                THIS&nbsp;&nbsp;&nbsp;PAGE&nbsp;&nbsp;&nbsp;IS&nbsp;&nbsp;&nbsp;YET&nbsp;&nbsp;&nbsp;TO&nbsp;&nbsp;&nbsp;BE&nbsp;&nbsp;&nbsp;IMPLEMENTED
            </h1>
            <img src={Img1} alt="" draggable={false} />
            <button onClick={()=>{
                navigate("/")
            }} className="text-white font-family-poppins cursor-pointer flex items-center gap-8"><FaArrowRight size={40}/>Go Back to Login Page</button>
        </div>
    );
};

export default ProfilePage;