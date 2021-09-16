import React from 'react'
import styles from './styles.module.scss'
import { Redirect } from 'react-router-dom'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
const HomePage: React.FC<any> = () => {
    return <div>
        <Header />
        <Main />
        <Footer />
    </div>
    // return <Redirect to={`/manage/device-type`} />
}

export default HomePage