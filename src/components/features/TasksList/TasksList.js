import React from 'react';
import PropTypes from 'prop-types';

import styles from './TasksList.module.scss';

const TasksList = ({ children }) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  );
};

TasksList.propTypes = {
  children: PropTypes.node,
};

export default TasksList;