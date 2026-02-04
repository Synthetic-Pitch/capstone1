import Navbar from "../components/Navbar";
import Desktop from "../screenSize/Desktop";
import Mobile from "../screenSize/Mobile";
import Tablet from "../screenSize/Tablet";

const LandingPage = () => {
    return (
        <div className=" flex flex-col items-center overflow-hidden">
            <Navbar />
            <Mobile className=" tablet:hidden"/>
            <Tablet className="hidden tablet:block desktop:hidden "/>
            <Desktop className="hidden desktop:flex flex-col w-full relative overflow-hidden"/>
        </div>
    );
};

export default LandingPage;