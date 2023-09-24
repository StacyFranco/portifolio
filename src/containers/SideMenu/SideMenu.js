import Image from "next/image"
import menu from "../../../public/icons/menu.svg"
import NavBar from "@/components/navBar/NavBar"

export default function SideMenu({ theme }) {
    return (
        <div className="SideMenu">
            <div className="BtnMenuDiv">
                <button className="BtnMenu">
                    <Image
                        className="MenuIcon"
                        src={menu}
                        alt=""
                    /> </button>
            </div>
            <div className="MenuNavDiv">
                <NavBar theme={theme} />
            </div>
            <div className="configMenu">
                
            </div>
        </div>
    )
}