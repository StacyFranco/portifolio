import CertificationCard from "@/components/certificationCard/certificationCard";
import { certificates } from "@/PersonalContent/personalInfo";

export default function Certifications({language}){
    return(
        <div className="CertificationsDiv" style={{display: "flex", flexWrap:"wrap"}}>
            {certificates.data.map( cert => (
                <CertificationCard 
                  CertImageTitle={cert.image.alt[language]}
                  CertImageUrl={require(`../../../public/images/certifications/${cert.image.src}`)}
                  CertTitle={cert.title[language]}
                  CertText={cert.content[language]}
                  CertClick={()=>window.open(cert.url)}
                    
                />
            )

            )}
            
        </div>
    )
}