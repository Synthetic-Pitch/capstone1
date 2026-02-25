import { useQuery } from "@tanstack/react-query";

// This should be a regular function, not async
// The queryFn handles the async operation
export const useSupabaseLogin = (plate_number: string) => {
    return useQuery({
        queryKey: ["User", plate_number],
        queryFn: async () => {
            try {
                const response = await fetch(
                    "https://gbvpdhqscwuaymsddvms.supabase.co/functions/v1/rapid-function",
                    {
                        headers: {
                           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdidnBkaHFzY3d1YXltc2Rkdm1zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA5MTA2NCwiZXhwIjoyMDg0NjY3MDY0fQ.VFMhc1HP3b9kVbLlsRVQKyJ748uQLMHblOnOHEkl2OM",
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify({ plate_number }) // Send as object
                    }
                );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                return await response.json();
            } catch (err) {
                console.error(err);
                throw err;
            }
        },
        enabled: false, // Don't run on mount, only when refetch is called
    });
};