import Img1 from "../assets/images/landingPage1.jpg";
import Img2 from "../assets/images/ChatGPT Image Feb 2, 2026, 07_59_48 PM.png";
import Img3 from "../assets/images/landingPage3.jpg";
import Img4 from "../assets/images/landingPage4.jpg";
import Img5 from "../assets/images/landingPage5.jpg";
import Img6 from "../assets/images/landingPage6.jpg";
import Logo1 from "../assets/images/OPSS_LOGO.png";
import Logo2 from "../assets/images/marikinaCityLogo.png";
import Icon1 from "../assets/icons/24hrs.png";
import Icon3 from "../assets/icons/icon1-removebg-preview.png";
import Icon4 from "../assets/icons/icon2-removebg-preview.png";
import Icon5 from "../assets/icons/icon3-removebg-preview.png";
import PlateNumInput from "../components/PlateNum-Input";
import PlateNumBtn from "../components/PlateNum-Btn";
import IsRotating from "../components/IsRotating";
import DailyCoding from "../components/DailyCoding";
import { ChadChart2 } from "../components/ShadChart2";
import { ShadChart3 } from "../components/ShadChart3";
import ShadChart from "../components/ShadChart";
import { ShadChart4 } from "../components/ShadChart4";
import Icon6 from '../assets/icons/videoIcon.png';
    import Icon7 from '../assets/images/announcement.png';
import AnnouncementMap from "../components/AnnouncementMap";

type SizeType = {
    className?: string;
};

const Tablet = ({ className }: SizeType) => {
    return (
        <div className={className}>
              {/* PHASE 1 */}
            <section className="min-h-dvh w-full relative">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-[#3085c1] opacity-75 z-[1]" />

                {/* Background images */}
                <aside className="absolute inset-0 overflow-hidden">
                    <section
                        className="h-full w-full grid"
                        style={{
                            gridTemplateColumns: "10% 10% 10% 40% 10% 10% 10%",
                            gridTemplateRows: "50% 50%",
                            gridTemplateAreas:
                                '"box1 box1 box2 box2 box2 box3 box3" "box4 box4 box4 box5 box6 box6 box6"',
                        }}
                    >
                        <div style={{ gridArea: "box1", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
                            <img src={Img1} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div className="relative" style={{ gridArea: "box2" }}>
                            <img src={Img2} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div className="relative" style={{ gridArea: "box3" }}>
                            <img src={Img3} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div className="relative" style={{ gridArea: "box4" }}>
                            <img src={Img4} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div className="relative" style={{ gridArea: "box5" }}>
                            <img src={Img5} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                        <div className="relative" style={{ gridArea: "box6" }}>
                            <img src={Img6} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                        </div>
                    </section>
                </aside>

                {/* Foreground content — flows naturally, no percentage heights */}
                <main className="relative z-2 flex flex-col items-center py-8 px-4 gap-6">

                    {/* Header: logos + title */}
                    <header className="flex flex-col items-center gap-3 w-full">
                        <p className="text-white font-family-poppins text-sm">
                            Marikina City Traffic Management
                        </p>
                        <div className="flex items-center gap-4">
                            <img src={Logo1} alt="OPSS Logo" style={{ objectFit: "cover", height: "80px" }} draggable={false} />
                            <aside className="font-family-poppins text-3xl font-bold text-white text-center">
                                <h1>Online Traffic Violation</h1>
                                <h1>Payment System</h1>
                            </aside>
                            <img src={Logo2} alt="Marikina Logo" style={{ objectFit: "cover", height: "100px" }} draggable={false} />
                        </div>
                        <div className="text-center text-white font-family-mozilla text-base">
                            <p>A Web-Based System for Online Traffic Violation Payment, Document</p>
                            <p>Submission, and Digital Record Management in Marikina City</p>
                        </div>
                    </header>

                    {/* Plate number card */}
                    <section className="w-full max-w-130 rounded-4xl bg-[#dae2e6] py-6 px-6 flex flex-col gap-4">
                        <div className="flex flex-col gap-1 text-center">
                            <p className="text-2xl font-bold font-poppins">Access your Account</p>
                            <p className="text-sm text-gray-500 font-family-mozilla">
                                Enter your vehicle plate number to view violations and make payments
                            </p>
                        </div>
                        <div className="flex items-center justify-center">
                            <PlateNumInput />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                            <IsRotating />
                            <PlateNumBtn />
                        </div>
                    </section>

                    {/* Feature cards */}
                    <footer className="grid grid-cols-2 gap-3 w-full max-w-175 cursor-default pb-6">
                        <section className="rounded-3xl bg-[#a4c6de] px-3 py-4 flex items-center gap-3 justify-center">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                                <img src={Icon1} alt="" className="h-10" draggable="false" />
                                <h1 className="text-lg font-bold text-[#00167a]">24/7</h1>
                                <h1 className="text-sm text-[#586dca]">Online Access</h1>
                            </div>
                            <div className="flex flex-col items-center text-sm font-family-poppins">
                                <p>check/view</p>
                                <p>records anytime</p>
                                <p>anywhere</p>
                            </div>
                        </section>
                        <section className="rounded-3xl bg-[#a4c6de] px-3 py-4 flex items-center gap-3 justify-center">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                                <img src={Icon3} alt="" className="h-10" draggable="false" />
                                <h1 className="text-sm font-bold text-[#00167a]">Fast</h1>
                                <h1 className="text-sm text-[#586dca]">Processing</h1>
                            </div>
                            <div className="flex flex-col items-center text-sm font-family-poppins">
                                <p>Reduces queues</p>
                                <p>and speed up</p>
                                <p>process thru online</p>
                            </div>
                        </section>
                        <section className="rounded-3xl bg-[#a4c6de] px-3 py-4 flex items-center gap-3 justify-center">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                                <img src={Icon4} alt="" className="h-10" draggable="false" />
                                <h1 className="text-sm font-bold text-[#00167a]">User</h1>
                                <h1 className="text-sm text-[#586dca]">Friendly</h1>
                            </div>
                            <div className="flex flex-col items-center text-sm font-family-poppins">
                                <p>Easy to use</p>
                                <p>and understand</p>
                                <p>with direct instruction</p>
                            </div>
                        </section>
                        <section className="rounded-3xl bg-[#a4c6de] px-3 py-4 flex items-center gap-3 justify-center">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                                <img src={Icon5} alt="" className="h-10" draggable="false" />
                                <h1 className="text-sm font-bold text-[#00167a]">Secure</h1>
                                <h1 className="text-sm text-[#586dca]">Records</h1>
                            </div>
                            <div className="flex flex-col items-center text-sm font-family-poppins">
                                <p>Data are secured</p>
                                <p>encrypted</p>
                                <p>with our technologies</p>
                            </div>
                        </section>
                    </footer>
                </main>
            </section>
            
            {/* PHASE 2 */}
            <section >
                <section  className=' max-h-200 bg-[#cbe0f2] flex flex-col items-center'>
                    <header className='h-120 w-full max-w-300 flex'>
                        <main className='w-[50%] h-full flex flex-col'>
                            <DailyCoding/>
                        </main>
                        <aside className='h-full w-[50%] flex justify-center items-center'>
                            <div className="w-[80%]">
                                <ChadChart2/>
                            </div>
                        </aside>
                    </header>
                    <p
                        id='landingPageSection2' 
                        className='h-[10%] w-full font-family-mozilla font-bold text-xl text-[#00167a] z-5 text-center py-7'>
                        Coding hours 7:00 AM - 7:00 PM | No Coding on Weekends and Holidays
                    </p>
                    <footer className='h-120 w-full max-w-300 flex justify-evenly'>
                        <ShadChart3 />
                        <ShadChart4/>
                        <div className='w-[30%] h-[70%] flex flex-col'>
                            <ShadChart/>
                            <p className='tablet:text-sm desktop:text-xl font-family-azeret pl-3'>Road Violation Rate</p>
                            <p className='font-family-poppins text-[10px] text-[#555555] pl-3'>This data visualization shows rate of road violation occured in Marikina City</p>
                        </div>
                    </footer>
                </section>
            </section>

            {/* Phase 3 */}
            <section className='h-140 max-h-300 w-full z-20 bg-[#cbe0f2] sticky top-0 flex flex-col justify-center items-center'>
                    <h1 className='text-xl font-bold font-family-azeret'>TUTORIAL VIDEO</h1>
                    <p className='text-xl font-family-poppins text-gray-500 mb-4 mt-2 text-center text-[14px]'>Step by step guide on viewing and paying your traffic violations online securely </p>
                    <div className='relative h-[80%] w-[90%] max-w-300 border-4 rounded-[4rem] border-black flex items-center justify-center '>
                        <img src={Icon6} alt="" className="tablet:h-60"/>
                    </div>
            </section>

            {/* Phase 4 */}

     
            <section className=' bg-[#3f6c84] flex flex-col items-center relative'>
                <main className=' relative'>
                    <h1 className='w-full text-center text-white text-3xl font-family-edu py-7 font-bold '>OPSS-TMEU NEWS UDPATE</h1>
                    <div className='text-[#d6d6d6] font-family-mozilla flex items-center justify-center gap-4 '>
                        <img src={Icon7} height={100} width={100} alt="pong" />
                        <div>
                            <p>Official Public safety Updates in Marikina City</p>
                            <h1>Ordinance No. 040, Series of 2018</h1>
                            <h1>Office of the City Major</h1>
                        </div>
                    </div>
                    <div className='w-full max-w-300 mt-8 relative'>
                        <AnnouncementMap/>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default Tablet;