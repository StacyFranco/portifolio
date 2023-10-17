import Image from "next/image";

export default function CertificationCard ({
    CertImageUrl,
    CertImageTitle,
    CertTitle,
    CertText,
    CertClick
}){
    return(
        <div className="CertificationCardDiv" onClick={CertClick}>
            <div className="CertImageDiv">
                <Image src={CertImageUrl}
                    alt={CertImageTitle}
                    width={50}
                    height={50}
                    />
                    
            </div>
            <div className="CertTextDiv">
                <h1 className="CertTitle">{CertTitle}</h1>
                <p className="CertText">{CertText}</p>
            </div>
        </div>
    )
}