function ProjectList(props) {
    const { projects } = props;
    
    return (
        <div className="container">
            {projects.map(project => {
                return (
                    <div className="item">
                        <img src={project.img} alt="Project" />
                    </div>
                )                
            })}
        </div>
    )
}

export default ProjectList;