import Img1 from '../assets/images/landingPage1.jpg';
import Img2 from '../assets/images/ChatGPT Image Feb 2, 2026, 07_59_48 PM.png';
import Img3 from '../assets/images/landingPage3.jpg';
import Img4 from '../assets/images/landingPage4.jpg';
import Img5 from '../assets/images/landingPage5.jpg';
import Img6 from '../assets/images/landingPage6.jpg';
import Logo1 from '../assets/images/logotmeu.jpg';
import Logo2 from '../assets/images/MarikinaILogo.png';
import Icon1 from '../assets/icons/24hrs.png';
import Icon3 from '../assets/icons/icon1-removebg-preview.png';
import Icon4 from '../assets/icons/icon2-removebg-preview.png';
import Icon5 from '../assets/icons/icon3-removebg-preview.png';
import Icon6 from '../assets/icons/videoIcon.png'

type DesktopSize = {
    className?:string
}

import { IoMdArrowRoundForward } from "react-icons/io";
import ShadChart from '../components/ShadChart';
import DailyCoding from '../components/DailyCoding';
import { ChadChart2 } from '../components/ShadChart2';
import { ShadChart3 } from '../components/ShadChart3';
import { ShadChart4 } from '../components/ShadChart4';
import { ShadChart5 } from '../components/ShadChart5';

const Desktop = ({className}:DesktopSize) => {
  
    

    return (
        <div className={className}>
            <section className='h-(calc(880px-56px)) w-full flex justify-center relative bg-[#925b5b]'>
                
                <div className="h-full w-full bg-[#3085c1] absolute opacity-[0.75] text-white z-2"/>

                <section className="h-full w-full max-w-300 bg-[#ca3c3c] relative container">
                    <div style={{gridArea: 'box1',display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
                    <img src={Img1} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}} />
                    </div>
                    <div className='relative' style={{gridArea: 'box2'}}>
                        <img src={Img2} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}} />
                    </div>
                    <div className='relative' style={{gridArea: 'box3'}}>
                        <img src={Img3} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}} />
                    </div>
                    <div className='relative' style={{gridArea: 'box4'}}>
                        <img src={Img4} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}} />
                    </div>
                    <div className='relative' style={{gridArea: 'box5'}}>
                        <img src={Img5} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}} />
                    </div>
                    <div className='relative' style={{gridArea: 'box6'}}>
                        <img src={Img6} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}} />
                    </div>
                </section>

                <main className='absolute top-0 h-full w-full max-w-300 z-3'>
                    <header className=' w-full h-[30%] flex flex-col items-center'>
                        <p className='h-[20%] text-white flex items-center font-family-poppins'>Marikina City Traffic Management</p>
                        <center className='flex items-center gap-4 h-[40%] '>
                            <img src={Logo1} alt="" style={{objectFit:'cover',height:'70px',borderRadius:'50%'}}/>
                            <aside className='text-4xl font-family-poppins font-bold text-white'>
                                <h1>Online Traffic Violation</h1>
                                <h1>Payment System</h1>
                            </aside>
                            <img src={Logo2} alt="" style={{objectFit:'cover',height:'70px'}}/>
                        </center>
                        <footer  className='h-[40%] flex flex-col justify-center gap-4 text-xl text-center text-white font-family-mozilla'>
                            <p>A Web-Based System for Online Traffic Violation Payment, Document</p>
                            <p>Submission, and Digital Record Management in Marikina City</p>
                        </footer>
                    </header>
                    <main className=' h-[40%] w-full flex items-center justify-center'>
                        <center className='bg-[#dae2e6] h-[90%] w-140 rounded-4xl'>
                            <header className='h-[40%] w-full flex flex-col justify-evenly'>
                                <p className='font-bold text-3xl font-poppins'>Acces your Account</p>
                                <p className='font-poppins text-sm font-family-mozilla text-gray-500'>Enter your vehicle plate number to view violation and make payments</p>
                            </header>
                            <main className='h-[30%] w-full flex items-center justify-center'>
                                <input type="text" className='w-[80%] h-[70%] bg-[white] outline-0 px-4 rounded-xl' placeholder='e.g ABC 1234' />
                            </main>
                            <footer className='h-[30%] w-full flex items-center justify-center'>
                                <div className=' w-[80%] h-[70%] rounded-xl flex justify-between items-center gap-4 cursor-pointer'>
                                    <IoMdArrowRoundForward size={50} color='#00167a'/>
                                    <ShadChart5/>
                                    {/* <button className='text-white text-xl bg-[#00167a] px-10 py-2 font-family-noto-kr hover:scale-105 transition-all duration-205'>enter</button> */}
                                </div>
                            </footer>
                        </center>
                    </main>
                    <footer className='h-[30%] w-full flex items-center justify-evenly cursor-default'>
                        <section className='w-[23%] h-[80%] bg-[#a4c6de] relative flex flex-col justify-center rounded-4xl'>
                            <div className='flex items-center justify-center gap-2 font-family-oswald select-none'>
                                <img src={Icon1} alt="" className='h-16' draggable='false'/>
                                <h1 className='font-bold text-2xl text-[#00167a]'>24/7</h1>
                                <h1 className='text-[#586dca] text-[clamp(16px,2vw,25px)] flex flex-col items-center justify-center '>Online Access</h1>
                            </div>
                            <div className='flex flex-col items-center font-family-poppins 
                             text-[clamp(1em,1.9vw,1.4rem)] '>
                                <p className=''>Pay fines and view</p>
                                <p className=''>records anytime</p>
                                <p className=''>anywhere</p>
                            </div>
                        </section>
                        <section className='w-[23%] h-[80%] bg-[#a4c6de] relative flex flex-col justify-center rounded-4xl'>
                            <div className='flex items-center justify-center gap-2 font-family-oswald select-none'>
                                <img src={Icon3} alt="" className='h-16' draggable='false'/>
                                <h1 className='font-bold text-[clamp(16px,2vw,25px)] text-[#00167a]'>Fast</h1>
                                <h1 className='text-[#586dca] text-[clamp(16px,2vw,25px)]'>Processing</h1>
                            </div>
                            <div className='flex flex-col items-center font-family-poppins text-[clamp(1em,1.9vw,1.4rem)]'>
                                <p className=''>Reduces queues</p>
                                <p className=''>and speed up</p>
                                <p className=''>process thu online</p>
                            </div>
                        </section>
                        <section className='w-[23%] h-[80%] bg-[#a4c6de] relative flex flex-col justify-center rounded-4xl'>
                            <div className='flex items-center justify-center gap-2 font-family-oswald select-none'>
                                <img src={Icon4} alt="" className='h-16' draggable='false'/>
                                <h1 className='font-bold text-[clamp(16px,2vw,25px)] text-[#00167a]'>User</h1>
                                <h1 className='text-[#586dca] text-[clamp(16px,2.1vw,27px)]'>Friendly</h1>
                            </div>
                            <div className='flex flex-col items-center font-family-poppins text-[clamp(1em,1.9vw,1.4rem)]'>
                                <p className=''>Easy to use</p>
                                <p className=''>and understand</p>
                                <p className=''>with direct instruction</p>
                            </div>
                        </section>
                        <section className='w-[23%] h-[80%] bg-[#a4c6de] relative flex flex-col justify-center rounded-4xl'>
                            <div className='flex items-center justify-center gap-2 font-family-oswald select-none'>
                                <img src={Icon5} alt="" className='h-16' draggable="false"/>
                                <h1 className='font-bold text-[clamp(16px,2vw,25px)] text-[#00167a]'>Secure</h1>
                                <h1 className='text-[#586dca] text-[clamp(16px,2.1vw,27px)]'>Records</h1>
                            </div>
                            <div className='flex flex-col items-center font-family-poppins text-[clamp(1em,1.9vw,1.4rem)]'>
                                <p className=''>Data are secured</p>
                                <p className=''>and fast due to</p>
                                <p className=''>handled by Supabase</p>
                            </div>
                        </section>
                    </footer>
                </main>
            </section>
            <section id='stickySection' className='h-220 max-h-250 bg-[#cbe0f2] flex flex-col items-center '>
                <header className='h-[60%] w-full max-w-300 flex'>
                    <main className='w-[60%] h-full flex flex-col'>
                        <DailyCoding/>
                        <p id='landingPageSection2'  className='h-[10%] w-full font-family-mozilla font-bold text-xl text-[#00167a] z-100'>
                            Coding hours 7:00 AM - 7:00 PM | No Coding on Weekends and Holidays
                        </p>
                    </main>
                    <aside className='h-full w-[40%] flex justify-center items-center'>
                        <ChadChart2/>
                    </aside>
                </header>
                <footer className='h-[40%] w-full max-w-300 flex flexx-col overflow-hidden'>
                    <ShadChart3 />
                    <ShadChart4/>
                    <div className='w-[40%] h-full flex flex-col'>
                        <ShadChart/>
                        <p className='text-2xl font-family-azeret pl-3'>Road Violation Rate</p>
                        <p className='font-family-poppins text-sm text-[#555555] pl-3'>This data visualization shows rate of road violation occured in Marikina City</p>
                    </div>
                </footer>
            </section>
            <section className='h-220 max-h-300 w-full z-20 bg-[#cbe0f2] sticky top-0 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold font-family-azeret'>TUTORIAL VIDEO</h1>
                <p className='text-xl font-family-poppins text-gray-500 mb-4 mt-2'>Step by step guide on viewing and paying your traffic violations online securely </p>
                <div className='relative h-[80%] w-[90%] max-w-300 border-4 rounded-[4rem] border-black flex items-center justify-center '>
                    <img src={Icon6} alt="" />
                </div>
            </section>
            <section className='h-220 max-h-300 bg-[#3f6c84] flex flex-col items-center'>
                <h1 className='text-white text-6xl font-family-edu py-7'>OPSS-TMEU ANNOUNCEMENT</h1>
                <p className='text-white font-family-mozilla'>Official Public safety Updates in Marikina City</p>
                <section className='w-full max-w-300 bg-[green]'>
                    
                </section>
            </section>
            
            
        </div>
    );
};

export default Desktop;