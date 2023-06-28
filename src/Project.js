import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const project = (props) => {

    const projects = props.projects;

    return ( 
        projects.map((project) => (
            <div className="card" key={project.id} style={{width: 18 + 'rem'}}>
                <img className="card-img-top" src={project.imageURL} alt="Project image"/>
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="row align-items-center">
                        <div className="col d-flex justify-content-center">
                            <a href={project.viewLink} className="btn pBtn">View <FontAwesomeIcon icon="fa-solid fa-eye" /></a>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <a href={project.repoLink} className="btn pBtn">Github <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" /></a>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );
}
 
export default project;
