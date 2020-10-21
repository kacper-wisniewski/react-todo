import React from 'react';
import PropTypes from 'prop-types';

import styles from './AddSubtask.module.scss';

const AddSubtask = ({ children }) => {
  return (
    <div className={styles.component}>
      { children }
    </div>
  );
};

AddSubtask.propTypes = {
  children: PropTypes.node,
};

export default AddSubtask;