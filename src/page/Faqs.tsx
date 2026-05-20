import Navbar from "../components/Navbar";
import DesktopFaqs from "../screenSize/Desktop-Faqs";

const Faqs = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <DesktopFaqs classname="px-6 desktop:p-0 desktop:flex flex-col items-center"/>
        </div>
    );
};

export default Faqs;