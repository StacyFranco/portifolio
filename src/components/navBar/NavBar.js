import Image from "next/image";
import home from "../../../public/icons/navBar/home.svg"
import about from "../../../public/icons/navBar/about.svg"
import experience from "../../../public/icons/navBar/experience.svg"
import portifolio from "../../../public/icons/navBar/portifolio.svg"
import contact from "../../../public/icons/navBar/contact.svg"
import NavBarIten from "./NavBarIten";
import { NavBarNames } from "@/pages/portifolio";

export default function NavBar({ hiden, language }) {
    
    return (
        <nav className="NavBar">
            <ul>
                <li>
                    <NavBarIten icon={home} text={NavBarNames[language][0]} hiden={hiden} />
                </li>
                <li>
                    <NavBarIten icon={about} text={NavBarNames[language][1]} hiden={hiden}/>
                </li>
                <li>
                    <NavBarIten icon={experience} text={NavBarNames[language][2]} hiden={hiden}/>
                </li>
                <li>
                    <NavBarIten icon={portifolio} text={NavBarNames[language][3]} hiden={hiden}/>
                </li>
                <li>
                    <NavBarIten icon={contact} text={NavBarNames[language][4]} hiden={hiden}/>
                </li>

            </ul>
        </nav>
    )
}