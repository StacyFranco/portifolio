import Image from "next/image"
import PerfilAvatar from "../../components/perfilAvatar/PerfilAvatar"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import download from "../../../public/icons/download.svg"
import { PersonalInfo } from "@/pages/portifolio"
export default function Perfil({ language }) {
    return (
        <div className={`PerfilDiv desktop`}>
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
                    <div className="btnResumeDiv">
                        <hr className="dividingLine" />
                        <button className="btnResume" >Download {PersonalInfo.resumeName[language]} <div className="DownloadIconDiv">
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
    )
}