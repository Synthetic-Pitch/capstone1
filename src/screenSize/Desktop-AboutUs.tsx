import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Img1 from "../assets/images/noBackgroundMarikina.png";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUsSection2 from "../components/AboutUs-Section2";
import AboutUsSection3 from "../components/AboutUs-Section3";
import AboutUsSection4 from "../components/AboutUs-Section4";
import AboutUsSection5 from "../components/AboutUs-Section5";
gsap.registerPlugin(SplitText, ScrambleTextPlugin, ScrollTrigger);


const DesktopAboutUs = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const visionRef = useRef<HTMLParagraphElement>(null);
    const missionRef = useRef<HTMLParagraphElement>(null);
    
    useGSAP(() => {
        const visionParagraph = new SplitText(visionRef.current, { type: "words" });
        const missionParagraph = new SplitText(missionRef.current, { type: "words" });
        
        gsap.to(headingRef.current, {
            scrambleText: {
                text: "OPSS MARIKINA CITY",
                chars: "upperCase",
                revealDelay: 0.5,
                speed: 0.7,
            },
            duration: 2,
        });

        // --- Vision/Mission words ---
        gsap.from(visionParagraph.words, {
            opacity: 0,
            scale: 5,
            y: 200,
            x: -400,
            stagger: { each: 0.1, from: "start" },
        });

        gsap.from(missionParagraph.words, {
            opacity: 0,
            scale: 5,
            y: 200,
            x: 400,
            stagger: { each: 0.02, from: "random" },
        });
    });
    
    return (
        <div className="hidden desktop:flex flex-col items-center  relative">
            <section className="h-dvh max-h-220 w-full relative bg-linear-to-b from-[#d7d2d3] to-[#a0a0a0] overflow-hidden">
                <main className="w-full h-full max-w-300  flex flex-col items-center justify-center m-auto">
                    <p ref={headingRef} className="text-[#052751] text-[4rem] font-family-mozilla text-center pb-20 z-5 font-bold space-x-1">
                    OPSS MARIKINA CITY
                    </p>
                    <div className="grid grid-cols-2 relative">
                        <div className="px-8 relative" ref={visionRef}>
                            <h1 className="text-3xl font-bold text-[#052751] mb-4 ">VISION</h1>
                            <i className="font-family-poppins text-2xl text-[#ececec] relative z-10">To make Marikina the safest and most secured city throughout the country</i>
                        </div>
                        <div className="px-8 " ref={missionRef}>
                            <h1 className="text-3xl font-bold text-[#052751]  mb-4 z-10">MISSION</h1>
                            <i className="font-family-poppins text-2xl text-[#ececec] relative z-10">
                                To improve peace, order and public safety of the city, to protect and secure
                                government official and employees as well as government facilities against
                                threat to life and property to provide the people of Marikina better service
                                through the development of an effective partnership between the OPSS and
                                the constituents it serves with demonstrations of sincerity and transparency
                                at all time and conditions.
                            </i>
                        </div>
                    </div>
                    <div className="absolute z-2">
                        <img
                            src={Img1}
                            alt=""
                            style={{
                                opacity: 0.2,
                                maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                            }}
                        />
                    </div>
                </main>
            </section>
            <section className="w-full bg-[#14345c] relative hideScrollBar overflow-x-hidden">
                <AboutUsSection2/>
                <AboutUsSection3/>
                <AboutUsSection4/>
                <AboutUsSection5/>
            </section>
           
        </div>
    );
};


export default DesktopAboutUs;