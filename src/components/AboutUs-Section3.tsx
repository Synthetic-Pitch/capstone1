import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import Img1 from '../assets/images/opssback.png';
gsap.registerPlugin(ScrollTrigger);

const AboutUsSection3 = () => {
    const child = useRef<HTMLDivElement>(null);
    const parent = useRef<HTMLDivElement>(null);
    const linesRef = useRef<HTMLParagraphElement[]>([]);
    const cautionRef = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        if (!child.current || !parent.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                start: "top 70%",
                end: "+=700",
                scrub: 1,
            },
        });

        // Expand the container first
        tl.to(child.current, { width: "98%", height: "1200px", duration: 2 });

        // Animate each line in one by one after expansion
        linesRef.current.forEach((line) => {
            tl.fromTo(
                line,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4 },
                `>-0.2` // each line starts slightly before the previous finishes
            );
        });
        gsap.to(cautionRef.current, {
            xPercent: -50,
            duration:500,
            ease: "none",
            repeat: -1,
        });
    }, { scope: parent });

    const setLineRef = (el: HTMLParagraphElement | null, index: number) => {
        if (el) linesRef.current[index] = el;
    };
    
    const lines = [
        "Sa lansangang puno ng galaw at sigla,",
        "Sa jeep at traysikel na sabay-sabay umaarangkada,",
        "May mga nakatayo, handang gumabay,",
        "Mapag matsyag at laging nakasabay",
        "",
        "Sa ilalim ng araw na tirik ang init,",
        "Sa ulan at hanging malakas humampas,",
        "Hindi natitinag ang kanilang tungkulin,",
        "Kaligtasan ng bayan ang kanilang adhikain.",
        "",
        "OPSS, sandigan ng katahimikan,",
        "Sa batas at disiplina'y may paninindigan.",
        "TMEU sa bawat kanto't daan,",
        "Trapiko'y inaayos para sa kapakanan ng bayan.",
        "",
        "Sa hudyat ng pito at kumpas ng kamay,",
        "Daloy ng sasakyan ay gumagaan.",
        "Bawat motorista'y pinaaalalahanan,",
        "Na disiplina ang susi sa kaayusan ng bayan.",
        "",
        "Marikina, lungsod na maipagmamalaki,",
        "Malinis, maayos, at may pagkakaisa palagi.",
        "Dahil sa mga bantay na laging handang umagapay,",
        "Kaayusan ng baya'y nakakamit na tunay.",
    ];

    let lineIndex = 0;

    return (
        <section
            ref={parent}
            className="relative w-full h-270 m-auto text-white overflow-x-hidden flex flex-col items-center bg-[#084085] py-14"
            style={{ minHeight: "300px" }}
        >
            <div className="bg-[#f2cb2c] text-black w-full absolute z-100 py-4 -rotate-4 overflow-hidden">
               <div ref={cautionRef} className="flex gap-2 w-max">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <p key={i} className="font-extrabold text-2xl">
                            CAUTION •
                        </p>
                    ))}
                </div>
            </div>
            <div
                ref={child}
                className="w-90 h-40 max-w-280 flex flex-col justify-center items-center px-8 rounded-2xl  py-40 relative bg-linear-to-b from-[#a1a8a8] to-[#084085] overflow-y-hidden "
            >
                <h1 className="text-3xl mb-4 font-family-mozilla font-bold">Bantay ng Kalsada</h1>
                {lines.map((line, i) =>
                    line === "" ? (
                        <br key={i} />
                    ) : (
                        <p
                            key={i}
                            ref={(el) => setLineRef(el, lineIndex++)}
                            style={{ opacity: 0 }}
                            className="text-2xl font-family-mozilla"
                        >
                            {line}
                        </p>
                    )
                )}
                <img src={Img1} alt="" className="absolute -left-20"/>
            </div>
            
        </section>
    );
};

export default AboutUsSection3;