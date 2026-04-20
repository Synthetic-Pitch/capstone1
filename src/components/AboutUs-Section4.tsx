import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import img1 from "../assets/images/streamline.png";
import img2 from "../assets/images/background1.png"
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection4 = () => {
    const parentCon = useRef<HTMLDivElement>(null);
    const mainCon = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!parentCon.current || !mainCon.current) return;
        
        // Create the animation with paused: true so it doesn't run immediately
        const animation1 = gsap.to(mainCon.current, {
            x: () => {
                if(!mainCon.current || !parentCon.current)return 0;
                const totalWidth = mainCon.current.scrollWidth - window.innerWidth
                return -totalWidth
            },
            paused: true, // This prevents immediate execution
            duration: 1, // Add duration for smoother control
            ease: "none" // Linear progress for better ScrollTrigger mapping
        });
        
        ScrollTrigger.create({
            trigger: parentCon.current,
            start: "top top",
            end:()=>{
                const totalWidth = mainCon.current!.scrollWidth - window.innerWidth;
                return `+=${totalWidth}`;
            },
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                const start_Animation1 = 0;
                const end_Animation1 = 1;
                // Map self.progress (0→1) into the start→end range, then clamp
                const clamped_Animation1 = gsap.utils.clamp(
                    start_Animation1,
                    end_Animation1,
                    self.progress
                );
                // Normalize to 0→1 so the animation plays fully within that range
                const normalized_Animation1 =
                    (clamped_Animation1 - start_Animation1) /
                    (end_Animation1 - start_Animation1);

                animation1.progress(normalized_Animation1);
            },
        });
        window.addEventListener("resize", () => ScrollTrigger.refresh());
    }, []); // Empty dependency array ensures it runs only once
    
    return (
        <div
            ref={parentCon}
            className="h-dvh w-full overflow-hidden"
        >
            <header className="h-[20%] w-full flex justify-center items-center text-white font-family-nexline text-8xl text-center">OUR CAPSTONE SYSTEM</header>
            <main ref={mainCon} className="h-[90%] w-[200dvw] flex overflow-x-scroll">
                <section className="h-full w-[50%] bg-white text-6xl relative">
                    <div className="bg-[rgb(255,255,255,.87)] h-full w-full relative z-10">
                        <h1 className="h-[20%] w-full flex items-center justify-center text-6xl font-family-bagel">MISSION</h1>
                        <p className="relative z-10 flex items-center justify-center h-[80%] w-full px-24 pb-8 text-[3rem] font-family-proforma tracking-wider">To streamline the operations of the Office for Public Safety and Security (OPSS) in Marikina by providing a user-friendly online platform that allows residents and businesses to efficiently settle violations, access information, and improve transparency, ultimately enhancing public service and compliance.</p>
                    </div>
                    <img src={img1} alt="" className="absolute top-0 h-full w-full z-0 object-cover"/>
                </section>
                <section className="h-full w-[50%] bg-white text-6xl font-family-proforma relative">
                    <div className="bg-[rgb(255,255,255,.8)] h-full w-full relative z-10">
                        <h1 className="h-[20%] w-full flex items-center justify-center text-6xl font-family-bagel">VISION</h1>
                        <p className="relative z-10 flex items-center justify-center h-[80%] w-full px-24 pb-8 text-[3rem] font-family-proforma tracking-wider">To create a modern, digital-first Marikina where public safety services are accessible, transparent, and convenient for everyone, fostering a community that is informed, responsible, and empowered through technology.</p>
                    </div>
                    <img src={img2} alt="" className="absolute top-0 h-full w-full z-0 object-cover"/>
                </section>
            </main>
        </div>
    );
};

export default AboutUsSection4;