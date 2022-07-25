import React from 'react';
import Styles from './index.css';
import { ERROR_CODE, ERROR_TEXT } from '../../constants/404Constants';

const NotFound = () => (
  <div className={Styles.container}>
    <h2 className={Styles.bold}>{ERROR_CODE}</h2>
    <h2>{ERROR_TEXT}</h2>
  </div>
);

export default NotFound;
