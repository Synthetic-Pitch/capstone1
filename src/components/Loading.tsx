import { useRef } from "react";
import { AiOutlineLoading } from "react-icons/ai";
const Loading = () => {
    const modalRef = useRef(null);
    return (
        <dialog ref={modalRef} open className="w-dvw h-dvh rounded-md bg-[rgba(255,255,255,0.3)] flex items-center justify-center z-100 fixed">
            <AiOutlineLoading size={100} className="animate-spin"/>
        </dialog>
    );
};

export default Loading;