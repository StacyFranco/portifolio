import { socialMediaLinks } from "@/PersonalContent/personalInfo"
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
        <div className="SocialMediaDiv">
            {
                Object.keys(socialMediaLinks).map((media,i) => (
                    <a
                        href={socialMediaLinks[media]}
                        key={i}
                        target="_blank">
                        <Image 
                        src={mediaImages[media]}
                        alt= { `${mediaImages[media]}`} 
                        className= {`MediaIcon`} />
                        
                    </a>
                ))
            }



        </div>
    )
}