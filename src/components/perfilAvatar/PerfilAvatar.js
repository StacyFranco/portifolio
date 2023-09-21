import Image from "next/image"
import { PersonalInfo } from "@/pages/portifolio"




export default function PerfilAvatar({language}) {
    return (
        <div className="PerfilAvatarDiv">
            <div className="ImageAvatarDiv">
                <Image
                    className="Avatar"
                    alt={language==="pt" ? "Foto Perfil" : "Perfil Photo"}
                    layout="fill"
                    src={require(`../../../public/images/${PersonalInfo.avatarPath}`)}
                />
            </div>
        </div>
    )
}