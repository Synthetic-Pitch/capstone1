import Img1 from "../assets/images/noBackgroundMarikina.png";
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
import visionIcon from "../assets/images/streamline.png";
import missionIcon from "../assets/images/background1.png"
import img1 from "../assets/images/progress/process27.jpg";
import img2 from "../assets/images/progress/process8.jpg";
import img3 from "../assets/images/progress/process28.jpg";
const MobileAboutUs = () => {

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
    ]

    return (
        <div > 
            <section className="tablet:hidden relative  w-full bg-[#A5A5A5]">
                <div className="absolute h-full top-0 left-0 overflow-hidden z-0 ">
                    <img src={Img1} alt="" className="h-230 object-cover opacity-[.1]"/>
                </div>
                <section className="relative top-0 left-0  w-full z-10 font-family-poppins text-3xl">
                    <h1 className="text-[#052751] font-family-mozilla font-bold text-center text-4xl py-8">OPSS MARIKINA CITY</h1>
                    <div className="px-4">
                        <h2 className="text-[#052751] font-bold text-2xl py-4">VISION</h2>
                        <p className="text-white font-normal text-[18px]">To make Marikina the safest and most secured city throughout the country</p>
                    </div>
                    <div className="px-4 pb-10">
                        <h2 className="text-[#052751] font-bold text-2xl py-4">MISSION</h2>
                        <p
                            className="text-white font-normal text-[18px]"
                        >
                            To improve peace, order and publicsafety of thecity,to protect and secure government officialand employees as well as government facilities against threat to life and property to provide the people of Marikina better serviceth rough the development of an effective partnership between the OPSS and the constituents it serves with demonstrations of sincerity and transparency at all time and conditions.
                        </p>
                    </div>
                </section>
            </section>

            <section className="m-auto w-full max-w-350 bg-[#052751]">
                <header className=" w-full text-white flex justify-center flex-col items-center py-12">
                    <h1 className="text-2xl desktop:text-4xl font-family-poetsen">CITIZEN’S CHARTER</h1>
                    <h1 className="font-family-poetsen text-2xl">2022</h1>
                    <div className="h-full w-full max-w-300 flex flex-col desktop:flex-row gap-6 mt-8 font-family-poppins">
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
                <section className="grid justify-items-center items-center grid-cols-2 desktop:grid-cols-4 relative z-2 btUsSectPrnt pt-2">
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
            </section>
            <section className="bg-[#14345C]">
                <div className="bg-[#F2CB2C] h-10 w-full font-extrabold flex items-center justify-evenly text-xl -rotate-3">
                    <p>caution</p> <span>•</span><p>caution</p> <span>•</span><p>caution</p>
                </div>
                <div className="text-white w-full flex flex-col items-center py-8 font-family-poppins text-center gap-1 px-3">
                    {
                        lines.map((i,index)=>(
                            <p key={index}>{i}</p>
                        ))
                    }
                </div>
            </section>
            
            <section>
                <h1 className="text-4xl bg-[#052751] text-white text-center font-family-nexline py-4">
                    OUR CAPSTONE PROJECT
                </h1>
                
                <div>
                    <h2 className="text-3xl text-center py-4 font-bold font-family-bagel">MISSION</h2>
                    <p className="relative z-10 flex items-center justify-center h-[80%] w-full px-4 pb-8 text-4xl font-family-proforma tracking-wider">To streamline the operations of the Office for Public Safety and Security (OPSS) in Marikina by providing a user-friendly online platform that allows residents and businesses to efficiently settle violations, access information, and improve transparency, ultimately enhancing public service and compliance.</p>
                    <div className="relative h-40 w-full">
                    <img src={visionIcon} alt="" className="absolute top-0 h-full w-full z-0 object-cover"/>
                </div>
                </div>
                <div>
                    <h2 className="text-3xl text-center py-4 font-bold font-family-bagel">VISION</h2>
                    <p className="relative z-10 flex items-center justify-center h-[80%] w-full px-4 pb-8 text-3xl font-family-proforma tracking-wider">To create a modern, digital-first Marikina where public safety services are accessible, transparent, and convenient for everyone, fostering a community that is informed, responsible, and empowered through technology.</p>
                </div>
                <div className="relative h-40 w-full">
                    <img src={missionIcon} alt="" className="absolute top-0 h-full w-full z-0 object-cover"/>
                </div>
            </section>
            <section className="bg-[#E6ECCE] relative">
                <h1 className="text-7xl py-4 text-center font-family-mono-maniac">IT ALL <span className="text-[#536D5D]">STARTED</span> AT</h1>
                <div className="relative flex justify-center">
                    <img src={img1} alt="" className="h-80" />
                </div>
                <div className="font-family-oswald py-6">
                    <h1 className="text-3xl text-[#008080] font-bold text-center py-2 ">HAPI KOPI</h1>
                    <p className="text-center text-2xl">Where problems are discovered</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <section className="font-family-oswald py-6">
                    <h1 className="text-3xl text-[#008080] font-bold text-center py-2 ">RESEARCH</h1>
                    <p className="text-center text-2xl">Where problems become ideas</p>
                </section>
                <div className="relative flex justify-center">
                    <img src={img3} alt="" className="h-80" />
                </div>
                <section className="font-family-oswald py-6">
                    <h1 className="text-3xl text-[#008080] font-bold text-center py-2 ">IMPLEMENTATION</h1>
                    <p className="text-center text-2xl">Where ideas become solutions</p>
                </section>
            </section>
        </div>
    );
};

export default MobileAboutUs;