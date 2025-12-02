import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light" //Set default to light if no theme is saved 
    })



  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme" ,newTheme)
  }

 // Apply theme to HTML element on load
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return(
    <ThemeContext.Provider
        value={{
        theme,
        setTheme,
        toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext(){
    return useContext(ThemeContext)
}