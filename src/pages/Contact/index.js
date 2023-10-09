import preferences from "@/assests/preferences"
import { contact, socialMediaLinks } from "../portfolio"
import { useState } from "react"
import ContactForm from "@/containers/ContactForm/ContactForm"
import SocialMedia from "@/components/socialMedia/SocialMedia"


export default function Contacts({ language }) {
    
    return (
        <div className="ContactPage">
            <div className="TitleDiv">
                <h1>{contact.title[language][0]}<strong>{contact.title[language][1]}</strong>{contact.title[language][2]}</h1>
            </div>
            <div className="TextDiv">
                <p>{contact.content[language]}</p>
            </div>
            <div className="LinksDiv">
                <SocialMedia language={language} />

            </div>
        </div>
    )
    //<ContactForm  language={language}/>
}
// export default preferences(Contacts)