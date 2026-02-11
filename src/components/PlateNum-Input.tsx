
import { useAppDispatch,useAppSelector } from "../store/hook";
import { setPlateNumber } from "../store/slices/user-input-slice";

const PlateNumInput = () => {
    const dispatch = useAppDispatch();
    const plateNumber = useAppSelector((state)=>state.userInput.plateNumber);
    const errorOccured = useAppSelector((state)=>state.userInput.errorOccured);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
        dispatch(setPlateNumber(value));
    };
    
    return (
        <>  
            {
                errorOccured && (
                    <h1 className="absolute top-0 text-[90%] bg-[rgb(255,0,0,.4)] px-7 text-white font-family-poppins">
                        Invalid Plate number try again
                    </h1>
                )
            }
            <input
                type="text" 
                className='w-[80%] h-[70%] bg-[white] outline-0 px-4 rounded-xl border-red-500' 
                placeholder='e.g ABC1234'
                value={plateNumber}
                onChange={handleChange}
            />
        </>
    );
};

export default PlateNumInput;