import { useEffect, useState } from "react";
import Img1 from '../assets/images/7.jpg'

const DailyCoding = () => {
    const [date,setNewDate] = useState<string>("");

    useEffect(()=>{
        const date = new Date();
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        setNewDate(dayName)
    },[])
    return (
        <div className="h-[90%] w-full grid grid-cols-3 gap-2">
                <section className="h-full flex flex-col items-center justify-evenly">
                <div className="h-40 w-[70%] bg-[#00167a] rounded-full flex flex-col items-center justify-center hover:translate-x-4 transition-all hover:scale-[.9] duration-200 cursor-default select-none">
                    <h1 className="text-white font-family-poppins">Monday</h1>
                    <h2 className="text-5xl font-family-poetsen text-white">1-2</h2>
                </div>
                <div className="h-40 w-[70%] bg-[#00167abd] rounded-full flex flex-col items-center justify-center hover:translate-x-4 hover:-translate-y-4 hover:scale-[.9] transition-all duration-200 cursor-default select-none">
                    <h1 className="text-white font-family-poppins">Tuesday</h1>
                    <h2 className="text-5xl font-family-poetsen text-white">3-4</h2>
                </div>
            </section>

            <section className="h-full flex flex-col ">
                
                <main className="h-[60%] w-full bg-[#00167a62] rounded-b-full flex items-center relative overflow-hidden boxShadow">
                    <img src={Img1} alt="" style={{objectFit:"cover",height:"100%",zIndex:1,position:'absolute'}} />
                    <div className="bg-[#3085c1] opacity-[.75] absolute z-2 h-full w-full"/>
                    <div className="relative h-full w-full z-3 font-bold text-white flex flex-col items-center justify-center text-2xl gap-4">
                        <p>Today's Coding</p>
                        <span className="text-5xl">{date}</span>
                    </div>
                </main>
                <div className="h-40 w-[70%] bg-[#00167a8c] rounded-full my-auto mx-auto flex flex-col items-center justify-center hover:-translate-y-4 hover:scale-[.9] transition-all duration-200 cursor-default select-none">
                    <h1 className="text-white font-family-poppins">Wednesday</h1>
                    <h2 className="text-5xl font-family-poetsen text-white">5-6</h2>
                </div>
            </section>

            <section className="h-full flex flex-col items-center justify-evenly ">
                <div className="h-40 w-[70%] bg-[#00167a2a] rounded-full flex flex-col items-center justify-center cursor-default hover:-translate-x-4 hover:scale-[.9] transition-all duration-200 select-none">
                    <h1 className="text-white font-family-poppins">Friday</h1>
                    <h2 className="text-5xl font-family-poetsen text-white">9-0</h2>
                </div>
                <div className="h-40 w-[70%] bg-[#00167a50] rounded-full flex flex-col items-center justify-center cursor-default hover:-translate-x-4 hover:-translate-y-4 hover:scale-[.9] transition-all duration-200 select-none">
                    <h1 className="text-white font-family-poppins">Thursday</h1>
                    <h2 className="text-5xl font-family-poetsen text-white">7-8</h2>
                </div>
            </section>
        </div>
    );
};

export default DailyCoding;