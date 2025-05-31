import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Use your preferred icons

type Theme = "winter" | "dark";

export const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<Theme>("dark");

    // Load theme on initial render
    useEffect(() => {
        const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const themeToggle = () => {
        const newTheme: Theme = theme === "winter" ? "dark" : "winter";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
     }
    return (
        <>
            {/* <div className="flex items-center" onClick={themeToggle}>
                {theme == 'winter' ? <Sun className={`h-6 w-6 ${theme === 'winter' ? 'text-yellow-600 fill-yellow-600 font-bold' : 'text-gray-600 font-thin'}`} /> : <Moon className={`h-6 w-6 ${theme === 'dark' ? 'text-white fill-white font-bold' : 'text-gray-400 font-thin'}`} />}
            </div> */}

<div className="flex items-center justify-center h-10 w-10" onClick={themeToggle}>
  {theme === 'winter' ? (
    <Sun className={`h-6 w-6 text-yellow-600 fill-yellow-600 font-bold`} />
  ) : (
    <Moon className={`h-6 w-6 text-white fill-white font-bold`} />
  )}
</div>
        </>

    );
};
