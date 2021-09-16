import React from 'react'
import styles from './styles.module.scss'
import { customers } from './data.js';
const TestGrid: React.FC<any> = () => {
    return <div className={styles.container}>
           {customers.map(c => <div key={c.ID}>{c.CompanyName}</div>)}
    </div>
}

export default TestGrid