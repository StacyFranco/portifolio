import { PersonalInfo, home } from "../../PersonalContent/personalInfo";
import Btn from "@/components/BtnColor1/btnColor1";
import { NavBarNames } from "@/PersonalContent/personalInfo";
import Image from "next/image";
import { useRouter } from "next/router";


export default function Home({ language }) {
    const router = useRouter();

    const OnClickIten = (ItenName) => {
        router.push(`/${ItenName}`)
    }
    return (
        <>
            <div className="HomeDiv Desktop">
                    <div className="TitleDiv">
                        <h1>{home.title[language][0]}<strong>{home.title[language][1]}</strong>{home.title[language][2]}</h1>
                    </div>
                <div className="TextDiv">
                    <div className="ContentDiv">
                        <p>{home.content[language]}</p>
                    <div className="BtnAboutDiv">
                        <Btn text={`${home.buttons[language][0]}`} click={() => OnClickIten(NavBarNames.en[1])} />
                        <Btn text={`${home.buttons[language][1]}`} click={() => OnClickIten(NavBarNames.en[2])} />
                    </div>
                    </div>
                <div className="ImageDiv">
                    <Image
                        layout="fill"
                        src={require(`../../../public/images/${PersonalInfo.avatarPath}`)} />
                </div>
                </div>

            </div>
            <div className="HomeDiv Mobile">

                <div className="TitleDiv">
                    <h1>{home.title[language][0]}<strong>{home.title[language][1]}</strong>{home.title[language][2]}</h1>
                </div>
                <div className="ImageDiv">
                    <Image
                        layout="fill"
                        src={require(`../../../public/images/${PersonalInfo.avatarPath}`)} />
                </div>
                <div className="ContentDiv">
                    <p>{home.content[language]}</p>

                    <div className="BtnAboutDiv">
                        <Btn text={`${home.buttons[language][0]}`} click={() => OnClickIten(NavBarNames.en[1])} />
                        <Btn text={`${home.buttons[language][1]}`} click={() => OnClickIten(NavBarNames.en[2])} />
                    </div>
                </div>

            </div>
        </>
    )
}
//export default preferences(Home);