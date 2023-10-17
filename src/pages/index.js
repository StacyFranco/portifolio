import { useEffect, useState } from "react"
import Perfil from "../containers/Perfil/Perfil"
import SideMenu from "../containers/SideMenu/SideMenu";
import { LanguageOptions } from "./personalInfo";
import Home from "./Home";

export default function Index({language}) {

  // for get preference theme from the browser use: 
  //const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  // prefersDarkMode.matches will prvide true or false for the theme and if that you can create your logic.


/*<div className={`IndexDiv ${CurrentTheme}`}>
 <div className={`IndexDiv ${CurrentTheme}`}>

      <Perfil language={Language} />
      <SideMenu theme={CurrentTheme} ChangeTheme={ChangeTheme} ChangeLanguage={ChangeLanguage} language={Language}/>
    </div>
    */

  return (
    <div>
      <Home language={language}/>
    </div>
    
  )
}
