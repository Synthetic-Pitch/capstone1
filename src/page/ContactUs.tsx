import Navbar from "../components/Navbar";
import { IoCall } from "react-icons/io5";
import { CgMail } from "react-icons/cg";

const ContactUs = () => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 w-full max-w-300 mx-auto flex flex-col desktop:flex-row">

                {/* ── LEFT: Info Section ── */}
                <section className="w-full desktop:w-[50%] flex items-center justify-center px-6 py-14 tablet:px-16 desktop:px-12 desktop:py-0">
                    <main className="w-full max-w-lg desktop:max-w-none text-center tablet:text-start desktop:text-start">

                        <p className="font-family-bagel text-sm tablet:text-base mb-1 text-[#444]">
                            we are open for everyone
                        </p>

                        <p className="font-family-poppins text-xl tablet:text-2xl leading-snug">
                            <span className="font-family-proforma text-6xl tablet:text-8xl block tablet:inline">
                                DISCUSS
                            </span>{" "}
                            your concern
                        </p>
                        <p className="font-family-poppins text-xl tablet:text-2xl mb-8 tablet:mb-12">
                            to us.
                        </p>

                        <p className="text-[12px] font-family-azeret leading-relaxed">
                            Are you feeling of concern/inquiring or something?
                        </p>
                        <p className="text-[12px] font-family-azeret mb-8 tablet:mb-12 leading-relaxed">
                            Just let us know and we are happy to hear and help for the best.
                        </p>

                        <p className="font-family-poppins text-[13px] font-semibold mb-2">
                            hotline/mobile no.
                        </p>
                        <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-8 mb-5 items-center tablet:items-start">
                            <span className="flex gap-2 items-center text-sm">
                                <IoCall size={18} /> (01) 8948-1206
                            </span>
                            <span className="flex gap-2 items-center text-sm">
                                <IoCall size={18} /> 09707331334
                            </span>
                        </div>

                        <p className="font-family-poppins text-[13px] font-semibold mb-2">
                            email
                        </p>
                        <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-8 items-center tablet:items-start">
                            <span className="flex gap-2 items-center text-sm">
                                <CgMail size={18} /> opsstmeu@gov.ph
                            </span>
                            <span className="flex gap-2 items-center text-sm">
                                <CgMail size={18} /> genuinepower123@gmail.com
                            </span>
                        </div>
                    </main>
                </section>

                {/* ── RIGHT: Form Section ── */}
                <section className="w-full desktop:w-[50%] flex justify-center items-center px-6 py-10 tablet:px-16 desktop:px-12 desktop:py-0">
                    <form className="w-full max-w-md bg-white boxShadow rounded-2xl flex flex-col px-8 py-8 gap-3">

                        <p className="text-sm font-family-poppins text-[#5d5d5d]">name</p>
                        <input
                            type="text"
                            className="bg-[#f2f2f2] outline-none border-0 px-4 py-3 rounded-md w-full font-family-poppins text-sm"
                        />

                        <p className="text-sm font-family-poppins text-[#5d5d5d]">email</p>
                        <input
                            type="text"
                            className="bg-[#f2f2f2] outline-none border-0 px-4 py-3 rounded-md w-full font-family-poppins text-sm"
                        />

                        <p className="text-sm font-family-poppins text-[#5d5d5d]">concern</p>
                        <input
                            type="text"
                            className="bg-[#f2f2f2] outline-none border-0 px-4 py-3 rounded-md w-full font-family-poppins text-sm"
                        />

                        <p className="text-sm font-family-poppins text-[#5d5d5d]">message</p>
                        <textarea
                            placeholder="message..."
                            className="h-36 tablet:h-40 w-full resize-none border-[#f2f2f2] outline-none border-2 rounded-md px-3 py-3 text-sm font-family-poppins"
                        />

                        <button className="w-full cursor-pointer bg-[#00167a] text-white py-3 rounded-md font-family-poppins text-sm hover:bg-[#0a2494] transition-colors duration-200">
                            send
                        </button>
                    </form>
                </section>

            </div>
        </div>
    );
};

export default ContactUs;