import { useState } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import './Portfolio.css';

function Portfolio(props) {
    let [ selected, setSelected ] = useState('All');
    const { projects } = props;
    const categories = ['All', ...new Set(projects.map(el => el.category))];

    const selectProjects = selected === 'All' ? projects : projects.filter(el => el.category === selected);
    
    return (
        <>
            <Toolbar categories={categories} onSelect={(cat) => setSelected(selected = cat)} selected={selected} />
            <ProjectList projects={selectProjects} />
        </>
    )
}

export default Portfolio;