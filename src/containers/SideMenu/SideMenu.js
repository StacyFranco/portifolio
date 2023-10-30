import { useState } from "react"
import Image from "next/image"

import menu from "../../../public/icons/sideMenu/menu.svg"
import close from "../../../public/icons/sideMenu/close.svg"
import sun from "../../../public/icons/sideMenu/sun.svg"
import moon from "../../../public/icons/sideMenu/moon.svg"

import { LanguageOptions } from "@/PersonalContent/personalInfo"
import { ThemeOptions } from "@/PersonalContent/personalInfo"
import NavBar from "@/components/navBar/NavBar"
import ToggleButton from "@/components/ToggleButton/ToggleButton"

// Problem with toogle button redering checked.. flikering!
// Need to create a upperMenu for phone! the way it is the menu is cuttering the content page!

export default function SideMenu({ theme, ChangeLanguage, ChangeTheme, language, }) {
    const [hiden, setHiden] = useState(true);

    const Menuclick = () => {
        setHiden(!hiden);
    }


    return (
        <div className={`SideMenu ${hiden ? "" : "OpenMenu"}`}>
            <div className="MenuDiv">
                <div
                    className="BtnMenuDiv"
                    onClick={(Menuclick)}
                >
                    <Image
                        className="MenuIcon"
                        src={hiden ? menu : close}
                        alt={hiden ? "menu" : "close"}
                    />
                </div>
            </div>
            <div className={`MenuContentDiv ${hiden ? "Desktop" : ""}`}>
                <div className={`MenuNavDiv `}>
                    <NavBar hiden={hiden} language={language} />
                </div>
                <div className={`ConfigMenu ${hiden ? "Desktop" : "OpenMenu"}`}>
                    <ToggleButton
                        LeftText={LanguageOptions[0].toUpperCase()}
                        RightText={LanguageOptions[1].toUpperCase()}
                        toggleClick={ChangeLanguage}
                        ButtonChecked={language !== LanguageOptions[0]}

                    />
                    <ToggleButton

                        LeftIcon={moon}
                        LeftIconAlt={"dark"}
                        RightIcon={sun}
                        RightIconAlt={"light"}
                        toggleClick={ChangeTheme}
                        ButtonChecked={theme !== ThemeOptions[0]}
                    />
                </div>
            </div>
        </div>
    )
}