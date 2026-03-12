import React from 'react';
import styles from './App.module.scss';

export default function App() {
  console.log(styles); // { container: "App_container__abc123" }
  return (
    <div className={styles.container}>
      Hello React + Webpack + SCSS modules
    </div>
  );
}