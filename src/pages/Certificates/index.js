import Certifications from "@/containers/Certifications/certifications"
import { certificatesHeader } from "../../PersonalContent/personalInfo"

export default function Certificates({ language }) {
    return (
        <div className="CertificatesPage">
            <div className="TitleDiv">
                <h1>{certificatesHeader.title[language][0]}<strong>{certificatesHeader.title[language][1]}</strong>{certificatesHeader.title[language][2]}</h1>
            </div>
            <div className="TextDiv">
                <p>{certificatesHeader.content[language]}</p>
            </div>
            <Certifications language={language} />

        </div>
    )
}
