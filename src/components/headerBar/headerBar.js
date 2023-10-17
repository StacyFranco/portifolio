import { NavBarNames } from "@/pages/personalInfo";
import { useEffect, useState } from "react";


export default function HeaderBar({language}){
    const [PageName,setPageName] = useState(NavBarNames[language][0])


useEffect(() => {
    const pageRoute = window.location.pathname
    const PageIndex = NavBarNames.en.findIndex(iten => iten === pageRoute. substring(1))
    const PageNewName = PageIndex === -1 ? NavBarNames[language][0] : NavBarNames[language][PageIndex]
    setPageName(PageNewName )
    
},[language,window.location.pathname])
   
    return(
        <div className="HearderBarDiv">
            <h1 className="PageName">{PageName}</h1>
        </div>
    )
}