import { useEffect, useState } from "react";

const PlateNumInput = () => {
    const [plateNumber,setPlateNumber] = useState<string>("");
    useEffect(()=>{
        console.log(plateNumber);
        
    },[plateNumber])
    return (
        <input  
            type="text" 
            className='w-[80%] h-[70%] bg-[white] outline-0 px-4 rounded-xl' 
            placeholder='e.g ABC 1234'
            value={plateNumber}
            onChange={(e)=>{
                const value = e.target.value;
                
                setPlateNumber(value)
            }}
        />
    );
};

export default PlateNumInput;