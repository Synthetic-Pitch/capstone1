import { useAppSelector } from "../store/hook";

const PopUp = () => {
    const popUp = useAppSelector((state)=>state.animation.triggerAboutUsAnimation);

    return (
        <div className={`${popUp ? "flex":"hidden"} z-100 fixed h-dvh w-dvw boxparent overflow-hidden text-[8dvw] font-family-poppins font-bold` }>
            <div className="w-[25%] h-full bg-[#e0e0e0] opacity-0 box box1 flex items-center justify-center">
                <span>O</span>
            </div>
            <div className="w-[25%] h-full bg-[#e0e0e0] opacity-0 box box2 flex items-center justify-center">
                <span>P</span>
            </div>
            <div className="w-[25%] h-full bg-[#e0e0e0] opacity-0 box box3 flex items-center justify-center">
                <span>S</span>
            </div>
            <div className="w-[25%] h-full bg-[#e0e0e0] opacity-0 box box4 flex items-center justify-center">
                <span>S</span>
            </div>
        </div>
    );
};

export default PopUp;