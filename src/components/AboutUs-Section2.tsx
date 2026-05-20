import { useGSAP } from "@gsap/react";
import Img2 from "../assets/images/opss1.png";
import Img3 from "../assets/images/opss2.png";
import Img4 from "../assets/images/opss3.png";
import Img5 from "../assets/images/opss4.png";
import Img6 from "../assets/images/opss5.png";
import Img7 from "../assets/images/opss6.png";
import Img8 from "../assets/images/opss7.png";
import Img9 from "../assets/images/opss8.png";
import Img10 from "../assets/images/opss9.png";
import Img11 from "../assets/images/opss10.png";
import Img12 from "../assets/images/opss11.png";
import Img13 from "../assets/images/opss12.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection2 = () => {
    useGSAP(() => {
        const sections = [
            { right: ".opssIMG1r", left: ".opssIMG1l" },
            { right: ".opssIMG2r", left: ".opssIMG2l" },
            { right: ".opssIMG3r", left: ".opssIMG3l" },
        ];
        
        sections.forEach(({ right, left }) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: right,   // use the right image as the trigger per section
                    start: "top bottom",
                    end: "top 80%",
                    scrub: 2,
                }
            });
            
            tl.from(right, { opacity: 0, x: -500, stagger: { each: 0.2 } })
            tl.from(left,  { opacity: 0, x: 500,  stagger: { each: 0.2 } }, "<");
        });
    });

    return (
        <main className="m-auto w-full max-w-350 pt-8 overflow-hidden">
            <header className="h-100 w-full text-white flex justify-center flex-col items-center py-12">
                <h1 className="text-2xl desktop:text-4xl font-family-poetsen">CITIZEN’S CHARTER</h1>
                <h1 className="font-family-poetsen text-2xl">2022</h1>
                <div className="h-full w-full max-w-300 flex tablet:flex-col desktop:flex-row gap-6 mt-8 font-family-poppins">
                    <h2 className="w-full desktop:w-[20%] text-center">mandate</h2>
                    <div className="w-full desktop:w-[80%] px-4 desktop:px-0">
                        <p className="">
                            Ordinance No. 040, Series of 2018, entitled <b>“ORDINANCE RESTRUCTURING
                            THE OFFICE OF PUBLIC SAFETY AND SECURTTY, REDEFINING ITS FUNCTIONS
                            AND FOR OTHER PURPOSES"</b>
                        </p>
                        <p className="mt-7">
                            Section 3. - The OPSS is hereby vested with the primary responsibility of
                            maintaining safety, security and order in all public spaces, keeping peace and
                            order, preventing and suppressing lawlessness, disorder, violence and
                            enforcing all laws and local ordinances for the safety, comfort and protection
                            of the citizenry, and managing, supervising, executing, enforcing and
                            implementing all national and local laws, rules and regulations governing the
                            operations/activities of all motorized and non-motorized vehicles within the
                            City of Marikina
                        </p>
                    </div>
                </div>
            </header>
            <section className="h-180 grid justify-items-center items-center grid-cols-3 desktop:grid-cols-4 relative z-2 btUsSectPrnt mt-12">
                <img src={Img2} alt="" className=" object-cover opssIMG1r border border-white"/>
                <img src={Img3} alt="" className=" object-cover opssIMG1r border border-white"/>
                <img src={Img4} alt="" className=" object-cover opssIMG1l border border-white"/>
                <img src={Img5} alt="" className=" object-cover opssIMG1l border border-white"/>
                <img src={Img6} alt="" className=" object-cover opssIMG2r border border-white"/>
                <img src={Img7} alt="" className=" object-cover opssIMG2r border border-white"/>
                <img src={Img8} alt="" className=" object-cover opssIMG2l border border-white"/>
                <img src={Img9} alt="" className=" object-cover opssIMG2l border border-white"/>
                <img src={Img10} alt="" className=" object-cover opssIMG3r border border-white"/>
                <img src={Img11} alt="" className=" object-cover opssIMG3r border border-white"/>
                <img src={Img12} alt="" className=" object-cover opssIMG3l border border-white"/>
                <img src={Img13} alt="" className=" object-cover opssIMG3l border border-white"/>
            </section>
        </main>
    );
};

export default AboutUsSection2;