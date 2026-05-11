// hooks/useBreakpoint.ts
import { useState, useEffect } from "react";

export function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<"mobile" | "tablet" | "desktop">("mobile");

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w >= 1024) setBreakpoint("desktop");
            else if (w >= 668) setBreakpoint("tablet");
            else setBreakpoint("mobile");
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return breakpoint;
}