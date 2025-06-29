"use client"

const ProjectCard = ({ project, isHovered, onHover, onLeave }) => {
    return (
        <div
            className={`bg-cyan-400/10 rounded-xl p-5 border border-cyan-400/20 transition-all duration-300 cursor-pointer ${isHovered
                    ? "transform -translate-y-2 scale-105 shadow-xl shadow-cyan-400/20 bg-cyan-400/15"
                    : "hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10"
                }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={() => window.open(project.link, '_blank')}
        >
            <h4 className="text-cyan-400 mb-3 text-lg font-semibold">{project.title}</h4>
            <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
        </div>
    )
}

export default ProjectCard
