import React, { useEffect, useState } from "react";
import type { ChangeEvent } from 'react';
import { Sun, Moon } from "lucide-react"; // Use your preferred icons

type Theme = "lemonade" | "dark";

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<Theme>("dark");

    // Load theme on initial render
    useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    // Toggle theme
    const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
        const newTheme: Theme = e.target.checked ? "lemonade" : 'dark';
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <div className="flex items-center gap-3">
            <Moon className={`${theme === 'dark' ? 'text-white fill-white font-bold' : 'text-gray-400 font-thin'}`} />
            <input
                type="checkbox"
                className="toggle"
                checked={theme !== "dark"}
                onChange={handleToggle}
            />
            <Sun className={`${theme === 'lemonade' ? 'text-yellow-600 fill-yellow-600 font-bold' : 'text-gray-600 font-thin'}`} />
        </div>
    );
};
