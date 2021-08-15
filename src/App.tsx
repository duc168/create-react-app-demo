import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import styles from './styles.module.scss';
const App = () => {
  return <div className={styles.container}>
    <Header />
    <Main />
    <Footer />
  </div>
}
export default App;