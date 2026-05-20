import Navbar from "../components/Navbar";
import DesktopAboutUs from "../screenSize/Desktop-AboutUs";
import MobileAboutUs from "../screenSize/Mobile-AboutUs";

const AboutUs = () => {
    return (
        <div className="flex flex-col min-w-dvw overflow-hidden">
           <Navbar />
           <DesktopAboutUs/>
           <MobileAboutUs/>
        </div>
    );
};

export default AboutUs;