import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUsSec4Footer from "./AboutUs-Sec4-Footer";
import AboutUsSec4Footer2 from "./AboutUs-Sec4-Footer2";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection4 = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [progress,setProgress] = useState<number>(0)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!parentRef.current || !childRef.current) return;
      
      const getScrollAmount = () =>
        childRef.current!.scrollWidth - window.innerWidth;
        gsap.to(childRef.current, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: parentRef.current,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            onUpdate:(self)=>{
              setProgress(Number(self.progress.toFixed(3)))
            }
          },
        });
      }, parentRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={parentRef} className="overflow-y-hidden min-h-300">
      <main
        ref={childRef}
        className="flex h-screen items-center text-[9dvh]"
      >
        <AboutUsSec4Footer progress={progress}/>

        <AboutUsSec4Footer2 progress={progress}/>
       
      </main>
    </div>
  );
};

export default AboutUsSection4;