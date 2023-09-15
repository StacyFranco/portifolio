import { socialMediaLinks } from "@/pages/portifolio"
import Image from "next/image"
import githubBlack from "../../../public/icons/githubBlack.svg"
import linkedinBlack from "../../../public/icons/linkedinBlack.svg"
import emailBlack from "../../../public/icons/emailBlack.svg"
import whatsappBlack from "../../../public/icons/whatsappBlack.svg"
import instagramBlack from "../../../public/icons/instagramBlack.svg"
import githubWhite from "../../../public/icons/githubWhite.svg"
import linkedinWhite from "../../../public/icons/linkedinWhite.svg"
import emailWhite from "../../../public/icons/emailWhite.svg"
import whatsappWhite from "../../../public/icons/whatsappWhite.svg"
import instagramWhite from "../../../public/icons/instagramWhite.svg"

const mediaImages = {
    dark:{
        github : githubWhite,
        linkedin: linkedinWhite,
        email: emailWhite,
        whatsapp: whatsappWhite,
        instagram: instagramWhite,
    },
    light:{
        github : githubBlack,
        linkedin: linkedinBlack,
        email: emailBlack,
        whatsapp: whatsappBlack,
        instagram: instagramBlack,
    }
};

export default function SocialMedia({theme, language}) {
    return (
        <div className="socialMediaDiv">
            {
                Object.keys(socialMediaLinks).map(media => (
                    <a
                        href={socialMediaLinks[media]}
                        target="_blank">
                        <Image 
                        src={mediaImages[theme][media]}
                        alt= {language ==="pt" ? `ícone do ${media}` : `icon of ${media}`} 
                        className="mediaIcon" />
                        
                    </a>
                ))
            }



        </div>
    )
}