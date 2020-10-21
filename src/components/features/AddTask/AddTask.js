import React from 'react';
import PropTypes from 'prop-types';

import styles from './AddTask.module.scss';

const AddTask = ({ children }) => {
  return (
    <div className={styles.component}>
      { children }
    </div>
  );
};

AddTask.propTypes = {
  children: PropTypes.node,
};

export default AddTask;