import React from 'react'
//css
import styles from '../components/MoreData.module.css'

const MoreData = ({ data }) => {
    const { pressure, humidity, nameCountry } = data;

    return (
        <div className={styles.container}>
            <span>name country : {nameCountry}</span>
            <span>perssure : {pressure} Pa</span>
            <span>humidity : {humidity}%</span>
        </div>
    )
}

export default MoreData
