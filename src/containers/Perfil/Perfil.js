import PerfilAvatar from "../../components/perfilAvatar/PerfilAvatar"
import SocialMedia from "../../components/socialMedia/SocialMedia"
import { PersonalInfo } from "@/pages/portifolio"
export default function Perfil({ language, theme }) {
    return (
        <div className="PerfilDiv">
            <PerfilAvatar language={language} />
            <div className="PersonalInfo">
                <span className="Name">
                    {PersonalInfo.firstName} {PersonalInfo.lastName}
                </span>
                {PersonalInfo.title[language].map(title => (
                    <span className="Title"> {title} </span>
                ))}
                <span className="Adress"> {PersonalInfo.adress} - {language === "pt" ? "Brasil" : "Brazil"}</span>
                <span className="Copyright">  {PersonalInfo.copyright[language]}</span>
                <button className="btnResume" >Download {language === "pt" ? "Currículo" : "Resume"}</button>
            </div>
            <SocialMedia theme={theme} language={language} />
        </div>
    )
}