import Navbar from "../components/Navbar";
import DesktopAboutUs from "../screenSize/Desktop-AboutUs";

const AboutUs = () => {
    return (
        <div className="flex flex-col">
           <Navbar />
           <DesktopAboutUs/>
        </div>
    );
};

export default AboutUs;