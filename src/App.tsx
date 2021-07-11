import React from 'react';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Main from './componets/Main';
import styles from './styles.module.scss';
const App = () => {
  return <div className={styles.container}>
    <Header />
    <Main />
    <Footer />
  </div>
}
export default App;