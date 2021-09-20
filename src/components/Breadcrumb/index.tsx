import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import styles from './styles.module.scss'

interface IBreadcrumb {
    id: string
    url: string
    name: string
}

const getBreadcrumbList = (inputLocationPathname: string): IBreadcrumb[] => {
    const pathName = inputLocationPathname + ''
        const items = pathName.split('/')
        .filter(p => p.length > 0)
        const list = items    
        .map((p, idx) => {
            const getUrl = () => {
                const indexOfCurrentPathName = pathName.indexOf(p)
                return pathName.substr(0, indexOfCurrentPathName) + p
            }
            return {
                id: `${idx}+${p}`,
                url: getUrl(),
                name: p
            } as IBreadcrumb
        })
        .map(pathNameObject => {
            const p = pathNameObject.name
            const firstLetter = p[0].toUpperCase()
            const theRest = p.substr(1, p.length)
            return {
                ...pathNameObject,
                name: `${firstLetter}${theRest}`
            } as IBreadcrumb
        })
        return list
}

const Breadcrumb: React.FC<any> = () => {
    const history = useHistory()
    const [list, setList] = useState<IBreadcrumb[]>(() => {
        return getBreadcrumbList(history.location.pathname)
    })
    const goTo = (destination: string) => {
        history.push(destination)
    }
    
    useEffect(() => {
        return history.listen((location) => { 
            setList(getBreadcrumbList(location.pathname))
        }) 
     },[history]) 
    return <div className={`${styles.container}`}>
            <ul className={styles.breadcrumb}>
                {list.map((item, idx) => {
                    const isLast = idx === list.length - 1
                    if (isLast) {
                        return <li key={item.id} className={styles.li}>{item.name}</li>
                    }
                    return <li key={item.id}  className={styles.li}><a className={styles.a} onClick={() => goTo(item.url)}>{item.name}</a></li>
                })}                
            </ul>
    </div>
}

export default Breadcrumb