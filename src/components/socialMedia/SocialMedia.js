import { socialMediaLinks } from "@/pages/portifolio"
import Image from "next/image"
import github from "../../../public/icons/github.svg"
import linkedin from "../../../public/icons/linkedin.svg"
import email from "../../../public/icons/email.svg"
import whatsapp from "../../../public/icons/whatsapp.svg"
import instagram from "../../../public/icons/instagram.svg"


const mediaImages = {
        github : github,
        linkedin: linkedin,
        email: email,
        whatsapp: whatsapp,
        instagram: instagram,
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
                        src={mediaImages[media]}
                        alt= {language ==="pt" ? `ícone do ${media}` : `icon of ${media}`} 
                        className= {`mediaIcon ${theme}`} />
                        
                    </a>
                ))
            }



        </div>
    )
}