import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="bg-[#ffffff] w-full h-14 gap-8 flex justify-end items-center px-12 relative font-family-poetsen text-[gray]">
            <Link to="/faqs">
                <li>Faqs</li>
            </Link>
             <Link to="/about-us">
                <li>About-us</li>
            </Link>
             <Link to="/documentation">
                <li>Documentation</li>
            </Link>
             <Link to="/contact-us">
                <li>Contact-us</li>
            </Link>
        </ul>
    );
};

export default Navbar;