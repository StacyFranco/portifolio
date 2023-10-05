import preferences from "@/assests/preferences"
import { contact, socialMediaLinks } from "../portifolio"
import { useState } from "react"
import ContactForm from "@/containers/ContactForm/ContactForm"
import SocialMedia from "@/components/socialMedia/SocialMedia"


export default function Contacts({ language }) {
    
    return (
        <div className="ContactDiv">
            <div className="TitleDiv">
                <h1>{contact.title[language]}</h1>
            </div>
            <div className="TextDiv">
                <p>{contact.content[language]}</p>
            </div>
            <SocialMedia language={language} />
        </div>
    )
    //<ContactForm  language={language}/>
}
// export default preferences(Contacts)