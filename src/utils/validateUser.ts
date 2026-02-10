import { z } from "zod";

// Define the schema
const PlateNumberSchema = z.string().refine(
    (val) => {
        const letters = val.match(/[a-zA-Z]/g) || [];
        const digits = val.match(/\d/g) || [];
        
        return (
            letters.length >= 2 &&      // at least 2 letters
            letters.length <= 3 &&      // maximum 3 letters
            digits.length >= 1 &&       // at least 1 digit
            digits.length <= 4          // maximum 4 digits
        );
    },
    {
        message: "Plate number must have 2-3 letters and 1-4 digits"
    }
);

// Create a validation function
export const validatePlateNumber = (plateNumber: string): { 
    isValid: boolean;
    error?: string;
} => {
    try {
        PlateNumberSchema.parse(plateNumber);
        return { isValid: true };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { 
                isValid: false, 
                error: "Error Plate-number validation"
            };
        }
        return { 
            isValid: false, 
            error: "Unknown error" 
        };
    }
};

//Get the TypeScript type from the schema
export type PlateNumber = z.infer<typeof PlateNumberSchema>;