import React from 'react'
import styles from './styles.module.scss'
const AppContainer: React.FC<any> = ({ children }) => {
    return <div className={styles.container}>
            {children}
    </div>
}

export default AppContainer