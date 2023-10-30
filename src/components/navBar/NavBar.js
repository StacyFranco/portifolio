import Image from "next/image";
import home from "../../../public/icons/navBar/home.svg"
import about from "../../../public/icons/navBar/about.svg"
import certificates from "../../../public/icons/navBar/certificates.svg"
import portfolio from "../../../public/icons/navBar/portfolio.svg"
import contact from "../../../public/icons/navBar/contact.svg"
import NavBarIten from "./NavBarIten";
import { NavBarNames } from "@/PersonalContent/personalInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navImages = {
    Home: home,
    About: about,
    Certificates: certificates,
    Portfolio: portfolio,
    Contact: contact
};

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
                {NavBarNames[language].map((itenBar, i) => (
                    <li key={i}>
                        <NavBarIten
                            icon={navImages[NavBarNames.en[i]]}
                            iconAlt={`${navImages[NavBarNames.en[i]]}`}
                            text={itenBar}
                            onClick={() => OnClickIten(NavBarNames.en[i])}
                            hiden={hiden}
                            active={activeRoute == NavBarNames.en[i] ? true : false}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    )
}