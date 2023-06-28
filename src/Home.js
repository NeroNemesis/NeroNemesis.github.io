import { useState } from "react";
import Project from './Project'

const Home = () =>
{
    const [projects, setProjects] = useState([
        { id: 1, title: 'HandyMan', description: 'lorem ipsum dolor...', viewLink: 'https://neronemesis.github.io/handyMan/', repoLink: 'https://github.com/NeroNemesis/handyMan', imageURL: process.env.PUBLIC_URL + '/images/handyMan.jpg'},
        { id: 2, title: 'CarPoolCITY', description: 'lorem ipsum dolor...', viewLink: '#', repoLink: '#', imageURL: '#'},
    ]);

    return(
        <div className="Home">
            <div className="d-flex pContainer">
            <Project projects={projects}/>
            </div>
        </div>
    );
}

export default Home;