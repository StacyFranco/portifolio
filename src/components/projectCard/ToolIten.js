import Image from "next/image"


export default function ToolIten({
    icon,
    text,
}) {
    return (
            <div 
            className={`ToolIconDiv `}>
                <Image
                    className="ToolIcon"
                    src={icon}
                    alt={text}
                />
            </div>
    )
}