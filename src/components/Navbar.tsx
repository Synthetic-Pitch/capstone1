
import { useDispatch } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";
import {setTriggerAboutUsAnimation,setNotTriggerAboutUsAnimation} from "../store/slices/animation-slice"
import gsap from "gsap";
const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleAnimation = async () => {
      
        await new Promise<void>((resolve)=>{
            dispatch(setTriggerAboutUsAnimation());
            gsap.fromTo(".box",{
                opacity:1,
                y:-2000,
            },{
                y:0,
                stagger:{
                    each:0.2,
                    from:"start",
                },
                onComplete:resolve
            });
        });
        await navigate("/about-us");
        await new Promise<void>((resolve)=>{
            dispatch(setTriggerAboutUsAnimation());
            gsap.fromTo(".box",{
               opacity:1,
            },{
                opacity:0,
                stagger:{
                    each:0.1,
                    from:"start"
                },
                onComplete:resolve
            })
        })
       
        document.querySelectorAll(".box").forEach((box)=>{
            gsap.set(box,{opacity:0})
        });

        dispatch(setNotTriggerAboutUsAnimation());
    }
    return (
        <ul className="bg-[#ffffff] w-full h-14 gap-8 flex justify-end items-center px-12 relative font-family-poetsen text-[gray] z-20">
            { location.pathname !== "/" && (
                <Link to='/'>
                    <li>Login</li>
                </Link>
            )}
            { location.pathname !== "/faqs" && (
                <Link to="/faqs">
                    <li>Faqs</li>
                </Link>
            )}
            { location.pathname !== "/about-us" && (
                <li className="cursor-pointer select-none" onClick={handleAnimation}>About Us</li>
            )}
             <Link to="/documentation">
                <li>Documentation</li>
            </Link>
             <Link to="/contact-us">
                <li>Contact-us</li>
            </Link>
        </ul>
    );
};

export default Navbar;