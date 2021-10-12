import React from 'react'
//functions
import { changeTemp } from '../function/functions'
import { changeTemp2 } from '../function/functions'
//css
import styles from './TempData.module.css'

const TempData = ({ data }) => {
    const {temp, minTemp, maxTemp} = data;
    return (
        <div className={styles.container}>
            <span>current temp : {changeTemp(temp)} C</span>
            <span>minimum temp : {changeTemp2(minTemp).toFixed(2)} C</span>
            <span>maximum temp : {changeTemp2(maxTemp).toFixed(2)} C</span>
        </div>
    )
}

export default TempData
