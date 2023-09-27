import Image from "next/image"


export default function NavBarIten({
    icon,
    text,
    hiden,
    onClick,
}) {
    return (

        <div className={`NavBarItenDiv`} >
            <div 
            onClick={onClick}
            className={`NavBarContentDiv ${hiden ? "hiden" : ""}`}>
                <Image
                    className="NavIcon"
                    src={icon}
                />
                <span>{text}</span>
            </div>

        </div>
    )
}