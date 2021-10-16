import React from 'react'
//functions
import { getData } from '../function/functions'
//css
import styles from './Button.module.css'
//font awesome 5
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Button = ({ city, show, setdata, setText }) => {

    const clickHandler = async (e) => {
        e.preventDefault();
        setText({
            stringInp: ""
        })
        show(true)
        setdata({
            show: false
        })
        if (city) {
                setTimeout(async () => {
                    show(false)
                    let fetchData = await getData(city)
                    .catch(err => alert("City / Country Not Found !"))
                    
                    fetchData && setdata({
                        show: true,
                        temp: fetchData.main.temp,
                        minTemp: fetchData.main.temp_min,
                        maxTemp: fetchData.main.temp_max,
                        pressure: fetchData.main.pressure,
                        humidity: fetchData.main.humidity,
                        nameCountry: fetchData.name
                    })
                }, 4000)
        } else {
            alert("Enter City or Country");
            show(false)
        }
    }
    return (
        <button className={styles.btn} onClick={clickHandler}>{<FontAwesomeIcon icon={faSearch} />}</button>
    )
}

export default Button
