import Image from "next/image"


export default function NavBarIten({
    icon,
    iconAlt,
    text,
    hiden,
    onClick,
    active,
}) {
    return (

        <div className={`NavBarItenDiv`} >
            <div 
            onClick={onClick}
            className={`NavBarContentDiv ${hiden ? "Hiden" : ""} ${active? "Active" : ""}`}>
                <Image
                    className="NavIcon"
                    src={icon}
                    alt={iconAlt}
                />
                <span>{text}</span>
            </div>

        </div>
    )
}