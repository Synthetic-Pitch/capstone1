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
interface MobileProps {
    className: string;
}

const Mobile = ({className}: MobileProps) => {
    return (
        <div className={className}>
            <section className=" min-h-screen w-dvw bg-[#2D6C9A]">
                <h1 className="text-white text-center pt-4">Marikina City Traffic Management</h1>
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
                    <section className="rounded-3xl  px-3 py-4 flex items-center gap-3 justify-center">
                        <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                            <img src={Icon1} alt="" className="h-10" draggable="false" />
                            <h1 className="text-2xl font-bold text-[#00167a]">24/7</h1>
                            <h1 className="text-xl text-[#586dca]">Online Access</h1>
                        </div>
                        <div className="flex flex-col items-center text-md font-family-poppins">
                            <p>check/view</p>
                            <p>records anytime</p>
                            <p>anywhere</p>
                        </div>
                    </section>

                    <section className="rounded-3xl  px-3 py-4 flex items-center gap-3 justify-center ">
                        <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                            <img src={Icon3} alt="" className="h-10" draggable="false" />
                            <h1 className="text-2xl font-bold text-[#00167a]">Fast</h1>
                            <h1 className="text-xl text-[#586dca]">Processing</h1>
                        </div>
                        <div className="flex flex-col items-center text-sm font-family-poppins">
                            <p>Reduces queues</p>
                            <p>and speed up</p>
                            <p>process thru online</p>
                        </div>
                    </section>
                    <section className="rounded-3xl  px-3 py-4 flex items-center gap-3 justify-center ">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                                <img src={Icon4} alt="" className="h-10" draggable="false" />
                                <h1 className="text-2xl font-bold text-[#00167a]">User</h1>
                                <h1 className="text-xl text-[#586dca]">Friendly</h1>
                            </div>
                            <div className="flex flex-col items-center text-sm font-family-poppins">
                                <p>Easy to use</p>
                                <p>and understand</p>
                                <p>with direct instruction</p>
                            </div>
                        </section>

                        <section className="rounded-3xl  px-3 py-4 flex items-center gap-3 justify-center">
                            <div className="flex items-center justify-center gap-2 font-family-oswald select-none">
                                <img src={Icon5} alt="" className="h-10" draggable="false" />
                                <h1 className="text-2xl font-bold text-[#00167a]">Secure</h1>
                                <h1 className="text-xl text-[#586dca]">Records</h1>
                            </div>
                            <div className="flex flex-col items-center text-sm font-family-poppins">
                                <p>Data are secured</p>
                                <p>encrypted</p>
                                <p>with our technologies</p>
                            </div>
                        </section>
                </aside>
            </section>

            {/* Phase 2 */}
            <section >
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
                    <footer className='h-120 w-full max-w-300 flex justify-evenly'>
                        <ShadChart3 />
                        <ShadChart4/>
                        <div className='w-[30%] h-[70%] flex flex-col'>
                            <ShadChart />
                            <p className='tablet:text-sm desktop:text-xl font-family-azeret pl-3'>Road Violation Rate</p>
                            <p className='font-family-poppins text-[10px] text-[#555555] pl-3'>This data visualization shows rate of road violation occured in Marikina City</p>
                        </div>
                    </footer>
                  
                </section>
            </section>
            
        </div>
    );
};

export default Mobile;