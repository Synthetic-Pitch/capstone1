import img1 from "../assets/icons/marikinaCity_icon.png"
type LoadingModalProps = {
    isOpen?: boolean;
};



const LoadingModal = ({ isOpen = false }: LoadingModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40">
            <div className="rounded-lg bg-[#eef7ff] px-6 py-4 shadow-lg h-full w-full flex items-center justify-center flex-col">
                
                <img src={img1} alt="img" className="h-60 w-60 object-cover" />
                <p className="font-family-poppins text-xl">loading...</p>
            </div>
        </div>
    );
};

export default LoadingModal;