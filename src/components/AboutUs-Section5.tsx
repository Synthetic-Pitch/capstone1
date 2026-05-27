import { useRef } from "react";
import img1 from "../assets/images/progress/process27.jpg";
import img2 from "../assets/images/progress/process8.jpg";
import img3 from "../assets/images/progress/process28.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection5 = () => {
    const targetImg = useRef<HTMLImageElement>(null);
    const targetImgWrapper = useRef<HTMLDivElement>(null);
    const targetCon = useRef<HTMLElement>(null);
    const targetFooter = useRef<HTMLElement>(null);
    
    useGSAP(()=>{
        gsap.timeline({
            scrollTrigger:{
                trigger:targetCon.current,
                start:"top 70%",
                end:"+=400",
                scrub:2,
                invalidateOnRefresh:true
            }
        })
        .to(targetImg.current,{
            y: () => {
                if (!targetImg.current || !targetCon.current) return "0";
                
                const imgRCT = targetImg.current.getBoundingClientRect();
                const conRCT = targetCon.current.getBoundingClientRect();
                
                const imgCenter = imgRCT.top + imgRCT.height / 2;
                const conCenter = conRCT.top + conRCT.height / 2;
                
                return `+=${conCenter - imgCenter}`;
            },
            immediateRender:false
        })
        .to(targetImg.current,{
            onStart:()=>{
                if(targetImg.current){
                    targetImg.current.src = img2
                }
            },
            onReverseComplete:()=>{
                if(targetImg.current){
                    targetImg.current.src = img1
                }
            },
            immediateRender:false
        });

        gsap.timeline({
            scrollTrigger:{
                trigger:targetFooter.current,
                start:"top 80%",
                end:"+=400",
                scrub:2,
                invalidateOnRefresh:true
            },
            defaults:{
                ease:"power1.inOut"
            },
            immediateRender:false
        })
        .to(targetImgWrapper.current,{
            y: () => {
                if (!targetImg.current || !targetFooter.current) return "0";
                
                const imgRCT = targetImg.current.getBoundingClientRect();
                const conRCT = targetFooter.current.getBoundingClientRect();

                const imgCenter = imgRCT.top + imgRCT.height / 2;
                const conCenter = conRCT.top + conRCT.height / 2;

                return `+=${conCenter - imgCenter}`;
            },
            x:()=>{
                if(!targetImgWrapper.current || !targetFooter.current)return "0";
                const imgRCT = targetImgWrapper.current.getBoundingClientRect();
                const conRCT = targetFooter.current.getBoundingClientRect();
                
                return `${conRCT.left - imgRCT.left}`
            },
            immediateRender:false
        })
        .to(targetImg.current,{
           
            onStart:()=>{
                if(targetImg.current){
                    targetImg.current.src= img3
                }
            },
            onReverseComplete:()=>{
                if(targetImg.current){
                    targetImg.current.src= img2
                }
            }
        })
    });
    
    return (
        <div className="h-[300dvh] w-full bg-[#e6ecce] relative flex flex-col items-center desktop:px-8">
            <main className="h-[50%] w-full max-w-400">
                <div
                    className="font-family-mono-maniac text-[4.5rem] h-[20%] w-full text-center "
                >IT ALL <span className="text-[#536d5d]">STARTED</span> AT</div>
                <section className="flex h-[80%] w-full">
                    <aside className="relative h-full w-[60%] flex items-center justify-center">
                        {/* wrapper div — ScrollTrigger 2 animates y here */}
                        <div ref={targetImgWrapper} className="h-[80%] z-20">
                            <img 
                                ref={targetImg}
                                src={img1} alt="img" 
                                className="h-full object-cover boxShadow rounded-[4rem]"
                            />
                        </div>
                    </aside>
                    <footer className="h-full w-[40%] flex flex-col justify-center px-8">
                        <h1 className="text-7xl font-family-oswald text-[teal] mb-6 font-bold">HAPPY KOPI</h1>
                        <p className="text-3xl font-family-oswald text-[#4b4b4b]">Where problems are discovered</p>
                    </footer>
                </section>
            </main>
            <main className="h-[50%] w-full max-w-400">
                <section className="flex h-full w-full">
                    <aside ref={targetCon} className="relative h-full w-[60%] flex items-center justify-center "/>
                    <footer className="h-full w-[40%] flex flex-col justify-center px-8">
                        <h1 className="text-6xl font-family-oswald text-[teal] mb-6 font-bold">RESEARCH</h1>
                        <p className="text-3xl font-family-oswald text-[#708884]">Where problems become ideas</p>
                    </footer>
                </section>
            </main>
            <main className="h-[50%] w-full max-w-400 rounded-2xl">
                <section className="flex h-full w-full">
                    <aside className="relative h-full w-[40%] flex flex-col items-center justify-center ">
                        <h1 className="text-4xl font-family-oswald text-[teal] mb-6 font-bold ">IMPLEMENTATION</h1>
                        <p className="text-3xl font-family-oswald text-[#708884] px-4">Where ideas become solutions</p>
                    </aside>
                    <footer ref={targetFooter} className="h-full w-[60%] px-8 "/>
                </section>
            </main>
        </div>
    );
};

export default AboutUsSection5;
