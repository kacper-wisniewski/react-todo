import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import styles from './TaskCard.module.scss';

import AddSubtask from '../../features/AddSubtask/AddSubtask';

class TaskCard extends React.Component {
  state = {
    subtasks: [],
    value: '',
  }

  handleChangeValue (newValue) {
    this.setState({ value: newValue });
  }

  handleAddSubtask ( value ) {
    const newSubtasks = this.state.subtasks;
    newSubtasks.push({
      id: newSubtasks.length + 1,
      name: value,
    });
    this.setState({ subtasks: newSubtasks });
  }

  handleRemoveSubtask (id) {
    const newSubtasks = this.state.subtasks.filter(elem => elem.id !== id);
    this.setState({ subtasks: newSubtasks });
  }

  render () {
    const { task, children } = this.props;
    const { subtasks, value } = this.state;
    return (
      <div className={styles.component}>
        <h2>{ task.name }</h2>
        {subtasks.length > 0 ? 
          <>
            <h3>Subtasks</h3>
            <ul>
              {subtasks.map(elem => (
                <li key={elem.id}>{ elem.name } <Button size='sm' variant='danger' onClick={() => this.handleRemoveSubtask(elem.id)}></Button></li>
              ))}
            </ul>
          </> :
          <></>
        }
        <AddSubtask>
          <h3>Add new Subtask</h3>
          <input type='text' value={value} onChange={event => this.handleChangeValue(event.target.value)} />
          <Button variant='success' onClick={() => this.handleAddSubtask(value)}>Add</Button>
        </AddSubtask>
        { children }
      </div>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object,
  children: PropTypes.node,
};

export default TaskCard;