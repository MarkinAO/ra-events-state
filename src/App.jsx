import { useState } from 'react';
import './App.css';
import SelectTask from './components/selectTask/SelectTask';
import './components/selectTask/SelectTask.css';
import Portfolio from './components/filter/Portfolio';
import Store from './components/store/Store';
import dataForHomework from './dataForHomework';
import Dropdown from './components/dropdown/Dropdown';

const { projects, products, items } = dataForHomework;

function App() {
  let [ curTask, setTask ] = useState('FILTER');
  const tasks = [
    { taskName: 'FILTER', solving: <Portfolio projects={projects} key={'FILTER'} />},
    { taskName: 'LAYOUTS', solving: <Store products={products} key={'LAYOUTS'} /> },
    { taskName: 'DROPWODW', solving: <Dropdown items={items} key={'DROPWODW'} /> }
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task) => setTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App
