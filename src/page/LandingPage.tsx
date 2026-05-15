import Navbar from "../components/Navbar";
import Desktop from "../screenSize/Desktop";
import Mobile from "../screenSize/Mobile";
import Tablet from "../screenSize/Tablet";

import { useBreakpoint } from "../hook/useBreakpoint";

const LandingPage = () => {
    const bp = useBreakpoint();
    
    return (
        <div className="flex flex-col items-center relative">
            <Navbar />
            {bp === "mobile"  && <Mobile className={"tablet:hidden w-full"} />}
            {bp === "tablet"  && <Tablet className="hidden tablet:block desktop:hidden w-full"/>}
            {bp === "desktop" && <Desktop className="hidden desktop:flex flex-col w-full relative overflow-hidden select-none"/>}
        </div>
    );
};

export default LandingPage;