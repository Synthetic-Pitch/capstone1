import {useSupabaseLogin} from "../services/SupabaseUserLogin"
import { useAppSelector } from "../store/hook";

export const useCustomHook = () => {
    
    const session = sessionStorage.getItem("plateNumber");
    const plateNumber = useAppSelector((state)=>state.userInput.plateNumber) || session;
    const { refetch,isLoading,isSuccess } = useSupabaseLogin(plateNumber || "");
    
    const fetchData = async () => {
        try{
            const res = await refetch();
            if(res.error){
                console.error("Error fetching data:", res.error);
            }
            return res.data;
        }catch(err){
            throw new Error("An error occurred while fetching data");
        }
    }
    
    return {fetchData,isLoading,isSuccess};
}