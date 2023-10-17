import Image from "next/image"
import PerfilAvatar from "../../components/perfilAvatar/PerfilAvatar"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import download from "../../../public/icons/download.svg"
import close from "../../../public/icons/sideMenu/close.svg"
import user from "../../../public/icons/user.svg"
import { PersonalInfo } from "@/pages/personalInfo"
import { useState } from "react"
export default function Perfil({ language }) {
    const [hiden, setHiden] = useState(true);

    const Perfilclick = () => {
        setHiden(!hiden)
    }

    return (

        <div className={`PerfilDiv`}>
            <div
                className={`BtnPerfil mobile ${hiden ? "" : "OpenPerfil"}`}
                onClick={Perfilclick}
            >

                <Image
                    className="PerfilIcon"
                    src={hiden ? user : close}
                    alt=""
                />
            </div>
            <div className={`PerfilContentDiv ${hiden ? "desktop" : ""}`}>


                <div className="PersonalInfo">
                    <div className="BasicInfo">
                        <PerfilAvatar language={language} />
                        <span className="Name">
                            {PersonalInfo.firstName} {PersonalInfo.lastName}
                        </span>
                        {PersonalInfo.title[language].map(title => (
                            <span className="Title"> {title} </span>
                        ))}

                    </div>
                    <div className="AditionalInfo">
                        <span className="Adress"> {PersonalInfo.adress} - {PersonalInfo.country[language]}</span>
                        <hr className="dividingLine" />
                        <span className="Copyright">  {PersonalInfo.copyright[language]}</span>
                        <hr className="dividingLine" />
                        <div className="SkillsDiv">
                            {
                                PersonalInfo.skills[language].map(skill =>(
                                    <p className="Skills">{skill}</p>

                                ))
                            }
                        </div>
                        <div className="btnResumeDiv">
                            <hr className="dividingLine" />
                            <button className="btnResume" onClick={()=>window.open(PersonalInfo.resumeLink[language])}>Download {PersonalInfo.resumeName[language]} <div className="DownloadIconDiv">
                                <Image
                                    className="DownloadIcon"
                                    src={download}
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