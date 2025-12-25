"use client";
import useTheme from "../lib/hooks/useTheme";
import { useEffect } from "react";

export default function ThemeInitializer({ children }: { children: React.ReactNode }) {
    const { value } = useTheme();

    useEffect(() => {
        if (value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [value]);

    return <>{children}</>;
}
