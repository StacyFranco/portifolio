import { socialMediaLinks } from "@/pages/portifolio"
import Image from "next/image"
import github from "../../../public/icons/socialMedia/github.svg"
import linkedin from "../../../public/icons/socialMedia/linkedin.svg"
import email from "../../../public/icons/socialMedia/email.svg"
import whatsapp from "../../../public/icons/socialMedia/whatsapp.svg"
import instagram from "../../../public/icons/socialMedia/instagram.svg"


const mediaImages = {
        github : github,
        linkedin: linkedin,
        email: email,
        whatsapp: whatsapp,
        instagram: instagram,
};

export default function SocialMedia({language}) {
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
                        className= {`mediaIcon`} />
                        
                    </a>
                ))
            }



        </div>
    )
}