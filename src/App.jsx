import { useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Login from "./pages/Login";
function App() {
  const [theme, setTheme] = useState("light")
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme" ,newTheme)
  }



  return (
    <div className="bg-neutral-200 dark:bg-neutral-700 dark:text-white h-screen">
   
      <Login/>

      <button onClick={toggleTheme} className="text-red-500 cursor-pointer">
        {theme ? <MdLightMode/> : <MdDarkMode/>}
      </button>





    </div>
  )
}

export default App
