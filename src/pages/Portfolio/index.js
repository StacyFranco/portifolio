import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectBtn, projects, projectsHeader } from "../../PersonalContent/personalInfo";



export default function Porfolio({ language }) {
    return (
        <div className="PortifolioPage">
            <div className="TitleDiv">
                <h1>{projectsHeader.title[language][0]}<strong>{projectsHeader.title[language][1]}</strong>{projectsHeader.title[language][2]}</h1>
            </div>
            <div className="ContentDiv">
                <p>{projectsHeader.content[language]}</p>
            </div>
            <div className="ProjectsDiv">
                {projects.data.map(project => (
                    <ProjectCard
                        ImageUrl={require(`../../../public/images/projects/${project.image.src}`)}
                        ImageAlt={project.image.alt[language]}
                        projectTitle={project.name}
                        projectDescription={project.description[language]}
                        toolIcons={project.tools}
                        BtnText={projectBtn[language]}
                        BtnClick={() => window.open(`${project.links[0].url}`)}
                    />))}

            </div>

        </div>
    )
}
