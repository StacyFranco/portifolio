import Image from "next/image";
import home from "../../../public/icons/navBar/home.svg"
import about from "../../../public/icons/navBar/about.svg"
import experience from "../../../public/icons/navBar/experience.svg"
import portifolio from "../../../public/icons/navBar/portifolio.svg"
import contact from "../../../public/icons/navBar/contact.svg"
import NavBarIten from "./NavBarIten";

export default function NavBar({ theme,hiden }) {
    
    return (
        <nav className="NavBar">
            <ul>
                <li>
                    <NavBarIten theme={theme} icon={home} text={"home"} hiden={hiden} />
                </li>
                <li>
                    <NavBarIten theme={theme} icon={about} text={"about"} hiden={hiden}/>
                </li>
                <li>
                    <NavBarIten theme={theme} icon={experience} text={"experience"} hiden={hiden}/>
                </li>
                <li>
                    <NavBarIten theme={theme} icon={portifolio} text={"portifolio"} hiden={hiden}/>
                </li>
                <li>
                    <NavBarIten theme={theme} icon={contact} text={"contact"} hiden={hiden}/>
                </li>

            </ul>
        </nav>
    )
}