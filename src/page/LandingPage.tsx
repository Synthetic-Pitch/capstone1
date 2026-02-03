import Navbar from "../components/Navbar";
import Desktop from "../screenSize/Desktop";
import Mobile from "../screenSize/Mobile";
import Tablet from "../screenSize/Tablet";

const LandingPage = () => {
    return (
        <div className=" flex flex-col items-center">
            <Navbar />
            <Mobile className=" tablet:hidden"/>
            <Tablet className="hidden tablet:block desktop:hidden "/>
            <Desktop className="hidden desktop:flex flex-col w-full relative"/>
        </div>
    );
};

export default LandingPage;