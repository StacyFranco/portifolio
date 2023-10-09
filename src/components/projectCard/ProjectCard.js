import Image from "next/image";
import ToolIten from "./ToolIten";
import BtnColor1 from "../BtnColor1/btnColor1";
import { iconTools } from "../../../public/icons/iconTools/ToolsObject";

export default function ProjectCard({
    ImageUrl,
    ImageAlt,
    projectTitle,
    projectDescription,
    toolIcons,
    toolText,
    BtnText,
    BtnClick,
}) {
    return (
        <div className="ProjectCardDiv">
            <div className="ProjectCardImage">
                <Image
                    src={ImageUrl}
                    alt={ImageAlt}
                    fill={true}
                //height={50}
                // width={50}
                />
            </div>
            <div className="ProjectCardInfo">
                <h1 className="ProjectCardTitle">{projectTitle}</h1>
                <p className="ProjectCardtext"> {projectDescription}</p>
                <div className="ProjectCardFooterDiv">
                    <div className="ProjectCardTools">
                        {
                            toolIcons.map(toolIcon => (
                                <ToolIten icon={iconTools[toolIcon].src} text={iconTools[toolIcon].alt} />

                            ))}

                    </div>
                    <BtnColor1 text={BtnText} click={BtnClick} btnClass={"btnProject"} />
                </div>
            </div>

        </div>
    )
}