import { MdDarkMode, MdLightMode } from "react-icons/md";
import AuthenticationHub from "./pages/AuthenticationHub";
import { useThemeContext } from "./context/themeContext";
function App() {
 
  const {theme, toggleTheme} = useThemeContext()



  return (
    <div className="bg-neutral-200 dark:bg-neutral-700 dark:text-white h-screen">
   
      <AuthenticationHub />

      <button onClick={toggleTheme} className="text-red-500 cursor-pointer">
        {theme ? <MdLightMode/> : <MdDarkMode/>}
      </button>





    </div>
  )
}

export default App
