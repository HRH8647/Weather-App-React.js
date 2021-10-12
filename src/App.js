import React from 'react'
//components
import Header from './components/Header'
import Input from './components/Input'
//css
import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Header />
                <Input />
            </div>
        </div>
    )
}

export default App
