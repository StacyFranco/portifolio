import Image from "next/image";
import home from "../../../public/icons/navBar/home.svg"
import about from "../../../public/icons/navBar/about.svg"
import experience from "../../../public/icons/navBar/experience.svg"
import portifolio from "../../../public/icons/navBar/portifolio.svg"
import contact from "../../../public/icons/navBar/contact.svg"

export default function NavBar({ theme }) {
    return (
        <nav className="NavBar">
            <ul>
                <li>
                    <div className=" NavBarLiDiv">
                        <Image
                            className={`NavIconLi ${theme} Icon`}
                            src={home}
                            alt=""
                        />
                        <span>home</span>
                    </div>

                </li>
                <li>
                <div className=" NavBarLiDiv">
                    <Image
                        className={`NavIconLi ${theme} Icon`}
                        src={about}
                        alt=""
                    />
                    <span>about</span>
                    </div>
                </li>
                <li>
                <div className=" NavBarLiDiv">
                    <Image
                        className={`NavIconLi ${theme} Icon`}
                        src={experience}
                        alt=""
                    />
                    <span>experience</span>
                    </div>
                </li>
                <li>
                <div className=" NavBarLiDiv">
                    <Image
                        className={`NavIconLi ${theme} Icon`}
                        src={portifolio}
                        alt=""
                    />
                    <span>portifolio</span>
                    </div>
                </li>
                <li>
                <div className=" NavBarLiDiv">
                    <Image
                        className={`NavIconLi ${theme} Icon`}
                        src={contact}
                        alt=""
                    />
                    <span>contact</span>
                    </div>
                </li>

            </ul>
        </nav>
    )
}