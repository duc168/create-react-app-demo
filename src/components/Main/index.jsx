import React from 'react';
import Counter from '../Counter';
import Todo from '../Todo';
import styles from './styles.module.scss'
import holograms from '@/assets/hologram.png'

const Main = () => {
    return <div className={styles.container}>
        <img alt="holograms" className={styles.bg} src={holograms} />
        <br />
        <br />
        <br />
        <br />
        <Counter />
        <hr />
        <Todo />
    </div>
}

export default Main;