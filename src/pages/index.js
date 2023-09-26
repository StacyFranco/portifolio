import { useEffect, useState } from "react"
import Perfil from "../containers/Perfil/Perfil"
import SideMenu from "../containers/SideMenu/SideMenu";
import { LanguageOptions } from "./portifolio";

export default function Home() {

  // for get preference theme from the browser use: 
  //const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  // prefersDarkMode.matches will prvide true or false for the theme and if that you can create your logic.

  const [CurrentTheme, setCurrentTheme] = useState("light");
  const [Language, setLanguage] = useState(LanguageOptions[0]);
  const [ThemeChange, setThemeChange] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const preferdTheme = (prefersDarkMode.matches === !true ? "dark" : "light");
    if (localStorage.getItem('theme') == null) {
      setCurrentTheme(preferdTheme);
      localStorage.setItem('theme', preferdTheme);
    } else {
      const newTheme = (CurrentTheme === "light" ? "dark" : "light");
      localStorage.setItem('theme', newTheme)
      setCurrentTheme(newTheme)
    }
  }, [ThemeChange]);

  const ChangeLanguage = () => {

    if (Language === LanguageOptions[0]) {
      setLanguage(LanguageOptions[1]);
      localStorage.setItem('language', LanguageOptions[1]);
    } else {
      setLanguage(LanguageOptions[0]);
      localStorage.setItem('language', LanguageOptions[0]);
    }
  }

const ChangeTheme = () =>{
  setThemeChange(!ThemeChange)
}

  return (
    <div className={`IndexDiv ${CurrentTheme}`}>

      <Perfil theme={CurrentTheme} language={Language} />
      <SideMenu theme={CurrentTheme} ChangeTheme={ChangeTheme} ChangeLanguage={ChangeLanguage} />
    </div>
  )
}
