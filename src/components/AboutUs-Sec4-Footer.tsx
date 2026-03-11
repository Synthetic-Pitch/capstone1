import { useGSAP } from "@gsap/react";
// import Img1 from "../assets/icons/chip_system.png";
import Vid1 from "../assets/videos/vid2.mp4";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

type Props = {
    progress:number;
}

gsap.registerPlugin(ScrollTrigger)

const AboutUsSec4Footer = ({progress}:Props) => {
    const Child = useRef<HTMLSpanElement>(null);
    const Child2 = useRef<HTMLSpanElement>(null);
    const ScrollProgress = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
    if (!Child.current) return;

    const tween1 = gsap.fromTo(Child.current,{       
        color:"#ffffff",
        y:-200,
    },{ 
        y:0, 
        color:"#df5252", 
        paused: true 
    }
    );
    const tween2 = gsap.fromTo(Child2.current,{
        x:-1000,
        opacity:0,
        scale:4,
    },{
        x:0,
        opacity:1,
        scale:1,
        paused: true
    })

    const start1 = 0.250;
    const end1 = 0.4;

    const start2 = 0;
    const end2 = 0.08;

    // Remap progress to 0–1 within the 0.3–0.6 window
    const local = Math.min(Math.max((progress - start1) / (end1 - start1), 0), 1);
    const local2 = Math.min(Math.max((progress - start2) / (end2 - start2), 0), 1);
    tween1.progress(local);
    tween2.progress(local2);
}, { dependencies: [progress] });
   
    return (
        <div ref={ScrollProgress} className="relative min-w-[400dvh] h-full flex items-center justify-center">
            <div className="h-full w-full flex items-center justify-center absolute">
                <video
                src={Vid1}
                loop
                autoPlay
                muted
                className="w-full h-full object-cover opacity-[.2]"
                ></video>
            </div>
            <div className="relative z-2 text-white px-12 text-[25vh] font-family-poetsen">
                <span className="inline-block" ref={Child2}>A</span>CCESS THE COR<span className="text-[#df5252] inline-block" ref={Child}>E</span>
            </div>
        </div>
    );
};

export default AboutUsSec4Footer;