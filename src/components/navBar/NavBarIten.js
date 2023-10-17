import Image from "next/image"


export default function NavBarIten({
    icon,
    text,
    hiden,
    onClick,
    active,
}) {
    return (

        <div className={`NavBarItenDiv`} >
            <div 
            onClick={onClick}
            className={`NavBarContentDiv ${hiden ? "hiden" : ""} ${active? "active" : ""}`}>
                <Image
                    className="NavIcon"
                    src={icon}
                />
                <span>{text}</span>
            </div>

        </div>
    )
}