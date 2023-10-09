import Image from "next/image";
import home from "../../../public/icons/navBar/home.svg"
import about from "../../../public/icons/navBar/about.svg"
import experience from "../../../public/icons/navBar/experience.svg"
import portifolio from "../../../public/icons/navBar/portifolio.svg"
import contact from "../../../public/icons/navBar/contact.svg"
import NavBarIten from "./NavBarIten";
import { NavBarNames } from "@/pages/portfolio";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NavBar({ hiden, language }) {
    const [activeRoute, SetActiveRoute] = useState('home')
    const router = useRouter();

    const FindActiveRoute = () => {
        const IndexActiveRoute = NavBarNames.en.findIndex(name => {
            return name.includes(window.location.pathname);
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


    return (
        <nav className="NavBar">
            <ul>
                <li>
                    <NavBarIten
                        icon={home}
                        text={NavBarNames[language][0]}
                        onClick={() => OnClickIten("")}
                        hiden={hiden} />
                </li>
                <li>
                    <NavBarIten
                        icon={about}
                        text={NavBarNames[language][1]}
                        onClick={() => OnClickIten(NavBarNames.en[1])}
                        hiden={hiden} />
                </li>
                <li>
                    <NavBarIten
                        icon={experience}
                        text={NavBarNames[language][2]}
                        onClick={() => OnClickIten(NavBarNames.en[2])}
                        hiden={hiden} />
                </li>
                <li>
                    <NavBarIten
                        icon={portifolio}
                        text={NavBarNames[language][3]}
                        onClick={() => OnClickIten(NavBarNames.en[3])}
                        hiden={hiden} />
                </li>
                <li>
                    <NavBarIten
                        icon={contact}
                        text={NavBarNames[language][4]}
                        onClick={() => OnClickIten(NavBarNames.en[4])}
                        hiden={hiden} />
                </li>

            </ul>
        </nav>
    )
}