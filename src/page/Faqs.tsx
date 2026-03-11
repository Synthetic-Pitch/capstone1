import Navbar from "../components/Navbar";
import DesktopFaqs from "../screenSize/Desktop-Faqs";

const Faqs = () => {
    return (
        <div>
            <Navbar/>
            <DesktopFaqs classname="hidden desktop:flex flex-col items-center"/>
        </div>
    );
};

export default Faqs;