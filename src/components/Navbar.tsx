import { useDispatch } from "react-redux";
import { Link, useNavigate,useLocation } from "react-router-dom";
import {setTriggerAboutUsAnimation,setNotTriggerAboutUsAnimation} from "../store/slices/animation-slice"
import gsap from "gsap";
import { TiThMenu } from "react-icons/ti";
import { useEffect, useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen,setIsOpen] = useState(false);


    const handleAnimation = async () => {
        setIsOpen(false);

        await new Promise<void>((resolve) => {
            dispatch(setTriggerAboutUsAnimation());
            gsap.fromTo(".box", {
                opacity: 1,
                y: -2000,
            }, {
                y: 0,
                stagger: {
                    each: 0.2,
                    from: "start",
                },
                onComplete: resolve
            });
        });

        navigate("/about-us"); // 👈 no await, just fire it

        // 👇 wait a tick for the page to render first
        await new Promise<void>((resolve) => setTimeout(resolve, 100));

        await new Promise<void>((resolve) => {
            dispatch(setTriggerAboutUsAnimation());
            gsap.fromTo(".box", {
                opacity: 1,
            }, {
                opacity: 0,
                stagger: {
                    each: 0.1,
                    from: "start"
                },
                onComplete: resolve
            })
        });

        document.querySelectorAll(".box").forEach((box) => {
            gsap.set(box, { opacity: 0 });
        });

        dispatch(setNotTriggerAboutUsAnimation());
    };
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 668) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <ul className="hidden bg-[#ffffff] w-full h-14 gap-8 tablet:flex justify-end items-center px-12 relative font-family-poetsen text-[gray] z-20">
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
                {
                    location.pathname !== "/documentation" && (
                        <Link to="/documentation">
                            <li>Documentation</li>
                        </Link>
                    )
                }
                {
                    location.pathname !== "/contact-us" && (
                        <Link to="/contact-us">
                            <li>Contact-us</li>
                        </Link>
                    )
                }
            </ul>
            
            {/* Mobile Slider */}
            <div className={`tablet:hidden w-full h-18 relative ${location.pathname === "/" && "bg-[#2D6C9A]"} ${location.pathname === "/about-us" && "bg-[#A5A5A5]"} ${location.pathname === "/faqs" && "bg-[#525252]"} ${location.pathname === "/contact-us" && "bg-[#525252]"}`}>
                <TiThMenu 
                    size={60} color={` ${isOpen ? "#FFFFFF" : "#FFFFFF"}`} className={`relative cursor-pointer z-30 ${isOpen ? "rotate-90": "rotate-0"} transition-all duration-100`}
                    onClick={()=>{
                        setIsOpen(!isOpen);
                    }}/>
                <div className={`fixed top-0 h-full w-full bg-[#111213] z-10 transition-all duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"} z-20`}>
                    <ul className="h-dvh w-dvw text-white flex flex-col gap-4 text-4xl font-family-poetsen items-center justify-center select-none">
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
                        {
                            location.pathname !== "/documentation" && (
                                <Link to="/documentation">
                                    <li>Documentation</li>
                                </Link>
                            )
                        }
                        {
                            location.pathname !== "/contact-us" && (
                                <Link to="/contact-us">
                                    <li>Contact-us</li>
                                </Link>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;