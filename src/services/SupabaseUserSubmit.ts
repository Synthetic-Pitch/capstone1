import { useQuery } from "@tanstack/react-query";

export const useSupabaseLogin = (plate_number:string) => {
    return useQuery({
      queryKey: ['supabaseLogin',plate_number],
      queryFn: async () => {
        const response = await fetch("https://gbvpdhqscwuaymsddvms.supabase.co/functions/v1/request-approval",{
          method:"POST",
          headers:{
            "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({plate_number})
        });
        if(!response.ok){
          const err = await response.json();
          throw new Error(err.error);
        }
        const data = await response.json();
   
        return data;
      },
      enabled: false,
    })
}