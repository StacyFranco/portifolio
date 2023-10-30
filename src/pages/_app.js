import '@/styles/globals.scss'

import { useEffect, useState } from "react";
import Perfil from "../containers/Perfil/Perfil"
import SideMenu from "../containers/SideMenu/SideMenu";
import { LanguageOptions } from "../PersonalContent/personalInfo";
import HeaderBar from "@/components/headerBar/headerBar";

export default function App({ Component, pageProps }) {
    const [CurrentTheme, setCurrentTheme] = useState(null);
    const [CurrentLanguage, setCurrentLanguage] = useState(null);
    const [ThemeChange, setThemeChange] = useState(false);
    const [LanguageChange, setLanguageChange] = useState(false);
    //const [NewChange,SetNewChange] = useState(false);
    let NewChange =false;
    useEffect(() => {
        const newTheme = localStorage.getItem('theme');
        if (newTheme !== null) {
            setCurrentTheme(newTheme)
        } else {
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
            const preferdTheme = (prefersDarkMode.matches === !true ? "dark" : "light");
            localStorage.setItem('theme', preferdTheme)
            setCurrentTheme(preferdTheme)
        }
    }, [ThemeChange, NewChange]);

    useEffect(() => {
        const newLanguage = localStorage.getItem('language');
        if (newLanguage !== null) {
            setCurrentLanguage(newLanguage)
        } else {
            localStorage.setItem('language', LanguageOptions[0])
        }
    }, [LanguageChange, NewChange]);




    const ChangeLanguage = () => {
        if (CurrentLanguage === LanguageOptions[0]) {
            localStorage.setItem('language', LanguageOptions[1]);
            setLanguageChange(!LanguageChange);
        } else {
            localStorage.setItem('language', LanguageOptions[0]);
            setLanguageChange(!LanguageChange);
        }
    }

    // to call useEffect I created the state ThemeChange. Don't have a better way?
    const ChangeTheme = () => {
        const setedTheme = localStorage.getItem('theme');
        localStorage.setItem('theme', setedTheme === "light" ? "dark" : "light")
        setThemeChange(!ThemeChange)
    }

    if(CurrentTheme == null && CurrentLanguage == null) { 
        console.log('CurrentTheme', CurrentTheme);
        console.log('CurrentLanguage',CurrentLanguage);
        
     }
     NewChange=true;

    return (

        (CurrentTheme && (
            CurrentLanguage && (
                
                <>
                {console.log('CurrentTheme', CurrentTheme)}
                 {console.log('CurrentLanguage',CurrentLanguage)}

                    <div lang={`${CurrentLanguage}`} className={` MainDiv ${CurrentTheme}`}>
                        <Perfil language={CurrentLanguage} />
                        <div className="BodyDiv" >
                            <HeaderBar language={CurrentLanguage} />
                            <Component  {...pageProps} theme={CurrentTheme} language={CurrentLanguage} />
                        </div>
                        <SideMenu theme={CurrentTheme} ChangeTheme={ChangeTheme} ChangeLanguage={ChangeLanguage} language={CurrentLanguage} LangBtnChecked={CurrentLanguage !== LanguageOptions[0]} />

                    </div >
                </>

            )

        ))


    );

}
