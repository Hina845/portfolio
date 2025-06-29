import { userContext } from "../main.jsx"

import InfoSection from "./info-section.jsx"
import Projects from "./projects.jsx"

import { useContext } from "react"

const ProfileInfoPanel = () => {

    const basicInfo = useContext(userContext)

    return (
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl animate-fade-in-delayed">
            <InfoSection title="" items={basicInfo["basic-info"]} />

            <InfoSection
                title="About Me"
                description= {basicInfo['about-me']}
            />

            <InfoSection
                title="Education"
                items={basicInfo["education"]}
            />

            <div className="mb-9">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-400/30 pb-2">Current Projects</h3>
                <Projects />
            </div>
        </div>
    )
}

export default ProfileInfoPanel
