import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { transaction_status } from "../store/slices/user-input-slice";

export const useSupabaseLogin = (plate_number: string) => {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ['supabaseLogin', plate_number],
    queryFn: async () => {
      const response = await fetch("https://gbvpdhqscwuaymsddvms.supabase.co/functions/v1/swift-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ plate_number })
      });
      
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error);
      }

      const data = await response.json();

      const status = data?.TRANSACTION?.transaction_status ?? null;
      dispatch(transaction_status(status));
      
      return data;
    },
    enabled: false,
  });
};