import React from 'react'
//functions
import { getData } from '../function/functions'
//css
import styles from './Button.module.css'

const Button = ({ text, city, show, setdata, setText }) => {

    const clickHandler = async (e) => {
        e.preventDefault();
        setText({
            stringInp: ""
        })
        show(true)
        if(city) {
            setTimeout(async () => {
                show(false)
                let fetchData = await getData(city);
                setdata({
                    show: true,
                    temp: fetchData.main.temp
                })
            }, 4000)
        } else {
            alert("Enter City or Country");
            show(false)
        }
    }
    return (
        <div>
            <button className={styles.btn} onClick={clickHandler}>{text}</button>
        </div>
    )
}

export default Button
