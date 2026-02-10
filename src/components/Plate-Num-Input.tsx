import { useState } from "react";
import { validatePlateNumber } from "../utils/validateUser";



const PlateNumInput = () => {
    const [plateNumber, setPlateNumber] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPlateNumber(value);
    };

    const handleBlur = () => {
       console.log();
       
    };

    return (
        <input
            type="text" 
            className='w-[80%] h-[70%] bg-[white] outline-0 px-4 rounded-xl' 
            placeholder='e.g ABC 1234'
            value={plateNumber}
            onChange={handleChange}
            onBlur={handleBlur}  // Validate when user leaves input
        />
    );
};

export default PlateNumInput;