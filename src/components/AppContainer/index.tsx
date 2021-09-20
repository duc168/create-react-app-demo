import React from 'react'
import Breadcrumb from '../Breadcrumb'
import styles from './styles.module.scss'
const AppContainer: React.FC<any> = ({ children }) => {
    return <div className={styles.container}>
            <Breadcrumb />
            {children}
    </div>
}

export default AppContainer