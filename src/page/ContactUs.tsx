import Navbar from "../components/Navbar";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const ContactUs = () => {

    return (
        <div className=" w-full">
            <Navbar/>
            <div className="h-[200dvh] desktop:h-dvh max-h-220 w-full max-w-300 m-auto flex flex-col items-center desktop:flex-row  relative">
                <section className="w-full desktop:w-[50%] h-dvh max-h-220 flex items-center justify-center flex-col ">
                    <main className="-mt-8">
                        <p className="font-family-bagel">we are open for everyone</p>
                        <p className="font-family-poppins text-2xl"><span className="font-family-proforma text-8xl">DISCUSS</span> your concern</p>
                        <p className="font-family-poppins text-2xl mb-12">to us.</p>
                        <p className="text-[12px] font-family-azeret">Are you feeling of concern/inquiring or something?</p>
                        <p className="text-[12px] font-family-azeret mb-12">Just let us know and we are happy to hear and help for the best.</p>
                        <p className="font-family-poppins text-[13px]">hotline/mobile no.</p>
                        <div className="flex gap-8 mb-2">
                            <span className="flex gap-2 items-center"><IoCall size={20}/> (01) 8948-1206 </span>
                            <span className="flex gap-2 items-center"><IoCall size={20}/> 09707331334 </span>
                        </div>
                        <p className="font-family-poppins text-[13px]">email</p>
                        <div className="flex gap-8">
                            <span className="flex gap-2 items-center justify-center"><CgMail size={20}/> <p>opsstmeu@gov.ph</p></span>
                            <span className="flex gap-2 items-center justify-center"><CgMail size={20}/> <p>genuinepower123@gmail.com</p></span>
                        </div>
                    </main>
                </section>
                <section className="w-full desktop:w-[50%] h-dvh max-h-220 flex justify-center items-center">
                    <form className="h-[90%] desktop:h-[60%] w-100 boxShadow rounded-2xl -mt-5 flex flex-col justify-center items-center px-9 py-9 gap-[2%]">
                        <p className="w-full px-2 text-sm font-family-poppins text-[#5d5d5d]">name</p>
                        <input type="text" placeholder="" className="bg-[#f2f2f2] outline-0 border-0 px-4 rounded-md w-full h-[8%] font-family-poppins"/>
                        <p className="w-full px-2 text-sm font-family-poppins text-[#5d5d5d]">email</p>
                        <input type="text" placeholder="" className="bg-[#f2f2f2] outline-0 border-0 px-4 rounded-md w-full h-[8%] font-family-poppins"/>
                        <p className="w-full px-2 text-sm font-family-poppins text-[#5d5d5d]">concern</p>
                        <input type="text" placeholder="" className="bg-[#f2f2f2] outline-0 border-0 px-4 rounded-md w-full h-[8%] font-family-poppins"/>
                        <textarea placeholder="message..." className="h-[40%] w-full resize-none border-[#f2f2f2] outline-0 border-2 rounded-md px-2 py-2"></textarea>
                        <button className="w-full cursor-pointer bg-[#00167a] text-white h-[8%]">send</button>
                    </form> 
                </section>
            </div>
        </div>
    );
};

export default ContactUs;