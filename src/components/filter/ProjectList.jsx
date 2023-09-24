function ProjectList(props) {
    const { projects } = props;
    
    return (
        <div className="container">
            {projects.map((project, index) => {
                return (
                    <div className="item" key={project + index}>
                        <img src={project.img} alt="Project" />
                    </div>
                )                
            })}
        </div>
    )
}

export default ProjectList;