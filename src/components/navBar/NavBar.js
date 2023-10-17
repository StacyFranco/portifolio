import Image from "next/image";
import home from "../../../public/icons/navBar/home.svg"
import about from "../../../public/icons/navBar/about.svg"
import experience from "../../../public/icons/navBar/experience.svg"
import portifolio from "../../../public/icons/navBar/portifolio.svg"
import contact from "../../../public/icons/navBar/contact.svg"
import NavBarIten from "./NavBarIten";
import { NavBarNames } from "@/pages/personalInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavBar({ hiden, language }) {
    const [activeRoute, SetActiveRoute] = useState('Home')
    const router = useRouter();

    const FindActiveRoute = () => {
        const IndexActiveRoute = NavBarNames.en.findIndex(name => {
            return name.includes(window.location.pathname.slice(1));
        });

        if (IndexActiveRoute === -1) {
            SetActiveRoute('Home')

        } else {
            SetActiveRoute(NavBarNames.en[IndexActiveRoute])

        }

    };

    const OnClickIten = (ItenName) => {
        router.push(`/${ItenName}`)
    }
    useEffect(() => {
        FindActiveRoute();
    }, [window.location.pathname])

    return (
        <nav className="NavBar">
            <ul>
                <li>
                    <NavBarIten
                        icon={home}
                        text={NavBarNames[language][0]}
                        onClick={() => OnClickIten("")}
                        hiden={hiden}
                        active={activeRoute == NavBarNames.en[0] ? true : false}
                    />
                </li>
                <li>
                    <NavBarIten
                        icon={about}
                        text={NavBarNames[language][1]}
                        onClick={() => OnClickIten(NavBarNames.en[1])}
                        hiden={hiden}
                        active={activeRoute == NavBarNames.en[1] ? true : false} />
                </li>
                <li>
                    <NavBarIten
                        icon={experience}
                        text={NavBarNames[language][2]}
                        onClick={() => OnClickIten(NavBarNames.en[2])}
                        hiden={hiden} 
                        active={activeRoute == NavBarNames.en[2] ? true : false}/>
                </li>
                <li>
                    <NavBarIten
                        icon={portifolio}
                        text={NavBarNames[language][3]}
                        onClick={() => OnClickIten(NavBarNames.en[3])}
                        hiden={hiden} 
                        active={activeRoute == NavBarNames.en[3] ? true : false}/>
                </li>
                <li>
                    <NavBarIten
                        icon={contact}
                        text={NavBarNames[language][4]}
                        onClick={() => OnClickIten(NavBarNames.en[4])}
                        hiden={hiden} 
                        active={activeRoute == NavBarNames.en[4] ? true : false}/>
                </li>

            </ul>
        </nav>
    )
}