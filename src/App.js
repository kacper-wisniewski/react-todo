import React from 'react';
import { Button } from 'react-bootstrap';

import TasksList from './components/features/TasksList/TasksList';
import AddTask from './components/features/AddTask/AddTask';
import TaskCard from './components/common/TaskCard/TaskCard';

class App extends React.Component {
  state = {
    tasks: [
      {id: 1, name: 'Lorem ipsum'},
      {id: 2, name: 'Start stream'},
      {id: 3, name: 'Finish stream'},
    ],
    value: '',
  }

  handleChangeValue (newValue) {
    this.setState({ value: newValue});
  }

  handleAddTask (value) {
    const newTasks = this.state.tasks;
    newTasks.push({ id: newTasks.length + 1, name: value });
    
    this.setState({ tasks: newTasks });
  }

  handleRemoveTask (id) {
    const newTasks = this.state.tasks.filter(elem => elem.id !== id);
    this.setState({ tasks: newTasks });
  }
  
  render () {
    const { tasks, value } = this.state;
    return (
      <div className="App">
        <TasksList>1
          {tasks.map(elem => (
            <TaskCard key={elem.id} task={elem}>
              <Button variant='danger' onClick={() => this.handleRemoveTask(elem.id)}>Remove Task</Button>
            </TaskCard>
          ))}
          <AddTask>
            <h2>Add new task</h2>
            <input type='text' value={value} onChange={event => this.handleChangeValue(event.target.value)} />
            <Button variant='success' onClick={() => this.handleAddTask(value)}>Add</Button>
          </AddTask>
        </TasksList>
      </div>
    );
  }
}

export default App;
