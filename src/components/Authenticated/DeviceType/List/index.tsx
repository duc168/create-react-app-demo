import React from 'react'
import styles from './styles.module.scss'
import TestGrid from './TestGrid'
const DeviceTypeList: React.FC<any> = () => {
    return <div className={styles.container}>
            <TestGrid />
    </div>
}

export default DeviceTypeList