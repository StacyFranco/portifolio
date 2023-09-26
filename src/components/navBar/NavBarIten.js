import Image from "next/image"


export default function NavBarIten({
    theme,
    icon,
    text,
    hiden,
    onClick,
}) {
    return (

        <div className={`NavBarItenDiv`} >
            <div 
            onClick={onClick}
            className={`NavBarContentDiv ${theme} ${hiden ? "hiden" : ""}`}>
                <Image
                    className="NavIcon"
                    src={icon}
                    alt=""
                />
                <span>{text}</span>
            </div>

        </div>
    )
}