import React from 'react';
import Counter from '../Counter';
import Todo from '../Todo';
import styles from './styles.module.scss'

const Main = () => {
    return <div className={styles.container}>
        <Counter />
        <hr />
        <Todo />
    </div>
}

export default Main;