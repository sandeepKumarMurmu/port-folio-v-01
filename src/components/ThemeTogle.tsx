import React, { useEffect, useState } from "react";
import type { ChangeEvent } from 'react';
import { Sun, Moon } from "lucide-react"; // Use your preferred icons

type Theme = "winter" | "dark";
type Props = { isIcon: boolean };

export const ThemeToggle: React.FC<Props> = ({ isIcon }) => {
    const [theme, setTheme] = useState<Theme>("dark");

    // Load theme on initial render
    useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    // Toggle theme
    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        const newTheme: Theme = e.target.checked ? "winter" : 'dark';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handelClick = () => {
        const newTheme: Theme = theme === "winter" ? "dark" : "winter";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
     }
    return (
        <>
            <div className="hidden lg:flex items-center gap-3">
                <Moon className={`${theme === 'dark' ? 'text-white fill-white font-bold' : 'text-gray-400 font-thin'}`} />
                <input
                    type="checkbox"
                    className="toggle"
                    checked={theme !== "dark"}
                    onChange={handleToggle}
                />
                <Sun className={`${theme === 'winter' ? 'text-yellow-600 fill-yellow-600 font-bold' : 'text-gray-600 font-thin'}`} />
            </div>

            <div className="lg:hidden flex items-center gap-3" onClick={handelClick}>
                {theme == 'winter' ? <Sun className={`${theme === 'winter' ? 'text-yellow-600 fill-yellow-600 font-bold' : 'text-gray-600 font-thin'}`} /> : <Moon className={`${theme === 'dark' ? 'text-white fill-white font-bold' : 'text-gray-400 font-thin'}`} />}
            </div>

        </>

    );
};
