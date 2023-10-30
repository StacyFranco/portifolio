import Image from "next/image"
import PerfilAvatar from "../../components/perfilAvatar/PerfilAvatar"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import download from "../../../public/icons/download.svg"
import close from "../../../public/icons/sideMenu/close.svg"
import user from "../../../public/icons/user.svg"
import { PersonalInfo } from "@/PersonalContent/personalInfo"
import { useState } from "react"
export default function Perfil({ language }) {
    const [hiden, setHiden] = useState(true);

    const Perfilclick = () => {
        setHiden(!hiden)
    }

    return (

        <div className={`PerfilDiv`}>
            <div
                className={`BtnPerfil Mobile ${hiden ? "" : "OpenPerfil"}`}
                onClick={Perfilclick}
            >

                <Image
                    className="PerfilIcon"
                    src={hiden ? user : close}
                    alt={hiden ? 'user' : 'close'}
                />
            </div>
            <div className={`PerfilContentDiv ${hiden ? "Desktop" : ""}`}>


                <div className="PersonalInfo">
                    <div className="BasicInfo">
                        <PerfilAvatar language={language} />
                        <span className="Name">
                            {PersonalInfo.firstName} {PersonalInfo.lastName}
                        </span>
                        {PersonalInfo.title[language].map((title,i) => (
                            <span className="Title" key={i}> {title} </span>
                        ))}

                    </div>
                    <div className="AditionalInfo">
                        <span className="Adress"> {PersonalInfo.adress} - {PersonalInfo.country[language]}</span>
                        <hr className="DividingLine" />
                        <span className="Copyright">  {PersonalInfo.copyright[language]}</span>
                        <hr className="DividingLine" />
                        <div className="SkillsDiv">
                            {
                                PersonalInfo.skills[language].map((skill,i) =>(
                                    
                                    <p className="Skills" key={i} >{skill}</p>

                                ))
                            }
                        </div>
                        <div className="BtnResumeDiv">
                            <hr className="DividingLine" />
                            <button className="BtnResume" onClick={()=>window.open(PersonalInfo.resumeLink[language])}>Download {PersonalInfo.resumeName[language]} <div className="DownloadIconDiv">
                                <Image
                                    className="DownloadIcon"
                                    src={download}
                                    alt="download"
                                /></div>
                            </button>
                        </div>

                    </div>
                </div>
                <SocialMedia language={language} />
            </div>
        </div>
    )
}