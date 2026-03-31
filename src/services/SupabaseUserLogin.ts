import { useQuery } from "@tanstack/react-query"

export const useSupabaseLogin = (plate_number: string) => {
  return useQuery({
    queryKey: ["User", plate_number],
    queryFn: async () => {
      const response = await fetch(
        "https://gbvpdhqscwuaymsddvms.supabase.co/functions/v1/rapid-function",
        {
          headers: {
            "Authorization": `Bearer ${import.meta.env.API_SECRET}`, // ← fixed
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ plate_number })
        }
      )

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return await response.json()
    },
    enabled: false,
  })
}