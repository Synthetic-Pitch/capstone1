import Img1 from "../assets/images/MarikinaILogo.png";
import Img2 from "../assets/images/LTOLogo.png";
import Img3 from "../assets/images/OPSSLogo.png";
import Img4 from "../assets/images/policeMiniture.png";

const AdminPage = () => {
    return (
        <div className="hdvh">
            {/* Mobile Section */}
            <section className="flex flex-col h-full bg-[red]">
                <header className="bg-[#E8E8E8] h-16 flex items-center justify-center gap-6">
                    <img src={Img1} alt="logo" className="h-12 w-12"/>
                    <img src={Img2} alt="logo" className="h-12 w-12"/>
                    <img src={Img3} alt="logo" className="h-12 w-12"/>
                    <img src={Img4} alt="logo" className="h-18"/>
                </header>
                <section className="bg-[#172A66] h-20 flex justify-center items-center">
                    <h1 className="text-white font-family-poetsen text-2xl">OPSS PERSONEL PANEL</h1>
                </section>
                <main className="grow bg-[#3F7CAB]">
                    
                </main>
            </section> 
            {/* desktop Section */}
        </div>
    );
};

export default AdminPage;