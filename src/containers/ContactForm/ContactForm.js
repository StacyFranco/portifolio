import FormIten from "@/components/formIten/formIten";
import BtnColor1 from "@/components/BtnColor1/btnColor1";
import { contact, socialMediaLinks } from "../../pages/personalInfo";
import { useState } from "react";


export default function ContactForm ({language}){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    return(
        <div className="FormDiv">
                <form action={socialMediaLinks.email} method="post" enctype="text/plain">
                    <FormIten
                        labelText={contact.placeholders[language].name}
                        inputType="text"
                        inputId ={"name"}
                        inputValue={name}
                        inputChange={e => setName(e.target.value)}
                    />
                    <FormIten
                        labelText={contact.placeholders[language].email}
                        inputType="email"
                        inputId ={"email"}
                        inputValue={email}
                        inputChange={e => setEmail(e.target.value)}
                    />
                    <FormIten
                        labelText={contact.placeholders[language].subject}
                        inputType="subject"
                        inputId ={"subject"}
                        inputValue={subject}
                        inputChange={e => setSubject(e.target.value)}
                    />
                    <FormIten
                        labelText={contact.placeholders[language].message}
                        textarea = 'true'
                        inputId ={"message"}
                        inputValue={message}
                        inputChange={e => setMessage(e.target.value)}
                    />
                    <BtnColor1  text={contact.placeholders[language].submit} type="submit" value="Send"/>
                </form>
            </div>
    )
}