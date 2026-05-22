import IsRotating from "../components/IsRotating";
import PlateNumBtn from "../components/PlateNum-Btn";
import PlateNumInput from "../components/PlateNum-Input";
import Logo1 from "../assets/images/OPSS_LOGO.png";
import Logo2 from "../assets/images/marikinaCityLogo.png";
import Icon3 from "../assets/icons/icon1-removebg-preview.png";
import Icon1 from "../assets/icons/24hrs.png";
import Icon4 from "../assets/icons/icon2-removebg-preview.png";
import Icon5 from "../assets/icons/icon3-removebg-preview.png";
import { ShadChart3 } from "../components/ShadChart3";
import ShadChart from "../components/ShadChart";
import { ChadChart2 } from "../components/ShadChart2";
import DailyCoding from "../components/DailyCoding";
import { ShadChart4 } from "../components/ShadChart4";
import AnnouncementMap from "../components/AnnouncementMap";
import Icon7 from '../assets/images/announcement.png';
import TutVideo from "../assets/videos/TutsVid.mp4";

interface MobileProps {
    className: string;
}
// here
const Mobile = ({className}: MobileProps) => {
    return (
        <div className={className}>
            <section className=" min-h-screen w-dvw bg-[#2D6C9A]">
                <h1 className="text-white text-center">Marikina City Traffic Management</h1>
                 <div className="flex items-center justify-evenly">
                    <img src={Logo1} alt="OPSS Logo" style={{ objectFit: "cover", height: "70px" }} draggable={false} />
                    <img src={Logo2} alt="Marikina Logo" style={{ objectFit: "cover", height: "90px" }} draggable={false} />
                 </div>
                <p className="text-white font-family-poppins text-3xl font-bold text-center pb-6 ">
                    Online Traffic Violation
                    Payment System
                </p>
                <section className="w-full tablet:rounded-4xl bg-[#dae2e6] py-6 px-2 flex flex-col gap-4 ">
                    <div className="flex flex-col gap-1 text-center">
                        <p className="text-2xl font-bold font-poppins py-3">Access your Account</p>
                        <p className="text-sm text-gray-500 font-family-mozilla">
                            Enter your vehicle plate number to view violations and make payments
                        </p>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <PlateNumInput />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <IsRotating />
                        <PlateNumBtn />
                    </div>
                </section>

                <aside className="bg-[#A4C6DE]">
                    <section className="rounded-3xl  px-3 py-4 flex items-center justify-between">
                        <div className="flex items-center justify-center gap-2 font-family-oswald select-none w-[60%]">
                            <img src={Icon1} alt="" className="h-10" draggable="false" />
                            <h1 className="text-2xl font-bold text-[#00167a]">24/7</h1>
                            <h1 className="text-xl text-[#586dca]">Online Access</h1>
                        </div>
                        <div className="flex flex-col items-start text-sm font-family-poppins w-[40%]">
                            <p>check/view</p>
                            <p>records anytime</p>
                            <p>anywhere</p>
                        </div>
                    </section>

                    <section className="rounded-3xl  px-3 py-4 flex items-center justify-between ">
                        <div className="flex items-center justify-center gap-2 font-family-oswald select-none w-[60%]">
                            <img src={Icon3} alt="" className="h-10" draggable="false" />
                            <h1 className="text-2xl font-bold text-[#00167a]">Fast</h1>
                            <h1 className="text-xl text-[#586dca]">Processing</h1>
                        </div>
                        <div className="flex flex-col items-start text-sm font-family-poppins w-[40%]">
                            <p>Reduces queues</p>
                            <p>and speed up</p>
                            <p>process thru online</p>
                        </div>
                    </section>
                    <section className="rounded-3xl  px-3 py-4 flex items-center justify-between ">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none w-[60%]">
                                <img src={Icon4} alt="" className="h-10" draggable="false" />
                                <h1 className="text-2xl font-bold text-[#00167a]">User</h1>
                                <h1 className="text-xl text-[#586dca]">Friendly</h1>
                            </div>
                            <div className="flex flex-col items-start text-sm font-family-poppins w-[40%]">
                                <p>Easy to use</p>
                                <p>and understand</p>
                                <p>with direct instruction</p>
                            </div>
                        </section>

                        <section className="rounded-3xl  px-3 py-4 flex items-center justify-between">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none w-[60%]">
                                <img src={Icon5} alt="" className="h-10" draggable="false" />
                                <h1 className="text-2xl font-bold text-[#00167a]">Secure</h1>
                                <h1 className="text-xl text-[#586dca]">Records</h1>
                            </div>
                            <div className="flex flex-col items-start text-sm font-family-poppins w-[40%]">
                                <p>Data are secured</p>
                                <p>encrypted</p>
                                <p>with our technologies</p>
                            </div>
                        </section>
                </aside>
            </section>

            {/* Phase 2 */}
            <section className="">
                <section id='stickySection' className=' min-h-screen bg-[#cbe0f2] flex flex-col items-center'>
                    <header className='w-full max-w-300 flex flex-col items-center'>
                        <main className='w-full h-90 flex flex-col '>
                            <DailyCoding/>
                        </main>
                        <aside className='h-full w-full flex justify-center items-center'>
                            <div className="w-full">
                                <ChadChart2/>
                            </div>
                        </aside>
                    </header>
                    <p
                        id='landingPageSection2' 
                        className='h-[10%] w-full font-family-mozilla font-bold text-xl text-[#00167a] z-5 text-center py-7'>
                        Coding hours 7:00 AM - 7:00 PM | No Coding on Weekends and Holidays
                    </p>
                    <footer className='w-full max-w-300 flex flex-col justify-evenly no-popup'>
                        <ShadChart3 />
                        <ShadChart4/>
                        <div className='tablet:w-[30%] h-[70%] flex flex-col px-2'>
                            <ShadChart />
                            <p className='tablet:text-sm desktop:text-xl font-family-azeret pl-3 select-none '>Road Violation Rate</p>
                            <p className='font-family-poppins text-[10px] text-[#555555] pl-3'>This data visualization shows rate of road violation occured in Marikina City</p>
                        </div>
                    </footer>
                </section>
            </section>
            
             {/* Phase 3 */}
            <section className='py-4 max-h-300 w-full z-20 bg-[#cbe0f2] flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-bold font-family-azeret'>TUTORIAL VIDEO</h1>
                    <p className='text-xl font-family-poppins text-gray-500 mb-4 mt-2 text-center text-[14px] px-2'>Step by step guide on viewing and paying your traffic violations online securely </p>
                    <div className='relative h-[80%] w-[90%] max-w-300 border-4 rounded-[4rem]overflow-hidden flex items-center justify-center'>
                        <video
                            src={TutVideo}
                            controls
                            className='w-full h-full object-cover'
                        />
                    </div>
            </section>

            {/* Section 4 */}
            <section className="relative w-full bg-[#3F6C84]">
                <h1 className='text-3xl text-white font-family-edu font-bold px-4 py-4 leading-12 whitespace-break-spaces text-center'>OPSS-TMEU NEWS UDPATE</h1>
                <div className='text-[#d6d6d6] font-family-mozilla flex items-center justify-center py-2 px-4'>
                    <img src={Icon7} height={80} width={80} alt="pong" />
                    <div className="w-full text-center">
                        <p>Official Public safety Updates in Marikina City</p>
                        <h1>Ordinance No. 040, Series of 2018</h1>
                        <h1>Office of the City Major</h1>
                    </div>
                </div>
                <div className='w-full mt-8 relative'>
                    <AnnouncementMap/>
                </div>
            </section>
        </div>
    );
};

export default Mobile;