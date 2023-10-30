import Image from "next/image"
import { PersonalInfo } from "@/PersonalContent/personalInfo"




export default function PerfilAvatar({language}) {
    return (
        <div className="PerfilAvatarDiv">
            <div className="ImageAvatarDiv">
                <Image
                    className="Avatar"
                    alt={PersonalInfo.avatarAlt[language]}
                    layout="fill"
                    src={require(`../../../public/images/${PersonalInfo.avatarPath}`)}
                />
            </div>
        </div>
    )
}