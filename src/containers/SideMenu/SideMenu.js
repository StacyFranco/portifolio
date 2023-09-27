import { useState } from "react"
import Image from "next/image"

import menu from "../../../public/icons/sideMenu/menu.svg"
import close from "../../../public/icons/sideMenu/close.svg"
import sun from "../../../public/icons/sideMenu/sun.svg"
import moon from "../../../public/icons/sideMenu/moon.svg"

import { LanguageOptions } from "@/pages/portifolio"
import NavBar from "@/components/navBar/NavBar"
import ToggleButton from "@/components/ToggleButton/ToggleButton"

export default function SideMenu({ theme, ChangeLanguage, ChangeTheme, language }) {
    const [hiden, setHiden] = useState(true);

    const Menuclick = () => {
        setHiden(!hiden);
    }




    return (
        <div className={`SideMenu ${hiden ? "" : "openMenu"}`}>
            <div className="MenuDiv">
                <div
                    className="BtnMenuDiv"
                    onClick={(Menuclick)}
                >

                    <Image
                        className="MenuIcon"
                        src={hiden ? menu : close}
                        alt=""
                    />
                </div>
            </div>
            <div className="MenuContentDiv">
                <div className={`MenuNavDiv ${hiden ? "desktop" : ""}`}>
                    <NavBar hiden={hiden} language={language} />
                </div>
                <div className={`configMenu ${hiden ? "desktop" : "openMenu"}`}>
                    <ToggleButton
                        LeftText={LanguageOptions[0].toUpperCase()}
                        RightText={LanguageOptions[1].toUpperCase()}
                        toggleClick={ChangeLanguage}
                    />
                    <ToggleButton

                        LeftIcon={moon}
                        LeftIconAlt={"dark"}
                        RightIcon={sun}
                        RightIconAlt={"light"}
                        toggleClick={ChangeTheme}
                    />
                </div>
            </div>
        </div>
    )
}