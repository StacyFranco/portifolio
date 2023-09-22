import { useEffect, useState } from "react"
import Perfil from "../containers/Perfil/Perfil"

export default function Home() {
 
  // for get preference theme from the browser use: 
  //const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  // prefersDarkMode.matches will prvide true or false for the theme and if that you can create your logic.

  const [CurrentTheme, setCurrentTheme] = useState("light");
  useEffect(()=> {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const preferdTheme = (prefersDarkMode.matches === !true ? "dark" : "light");
    if(localStorage.getItem('theme') == null){
      setCurrentTheme(preferdTheme);
      localStorage.setItem('theme',preferdTheme);
    }else{
      const newTheme = (CurrentTheme === "light" ? "dark" : "light");
      localStorage.setItem('theme', newTheme)
      setCurrentTheme(newTheme )
      
    }
  },[] )
  return (
    <>
    
      <Perfil theme={CurrentTheme} language={"en"}/>
    </>
  )
}
