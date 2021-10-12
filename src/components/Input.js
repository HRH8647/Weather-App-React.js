import React, { useState } from 'react'
//components
import Button from './Button'
import Nav_Box from './Nav_Box'
//css
import styles from '../components/Input.module.css'
//font awesome 5
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'

const Input = () => {
    const [text, setText] = useState({
        stringInp: ""
    });

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        show: false,
        temp: 0,
        minTemp: 0,
        maxTemp: 0,
        pressure: 0,
        humidity: 0,
        nameCountry: ""
    })

    const changeHandler = (e) => {
        setText({
            ...text,
            stringInp: e.target.value
        })
    }

    const resetHandler = () => {
        setData({
            ...data,
            show: false
        })
    }
    const { stringInp } = text;
    return (
        <div>
            <form>
                <label className={styles.label_text}>City / Country</label><br />
                <input type="text" value={stringInp} onChange={changeHandler} className={styles.input_field} /><br />
                <span>please enter city or country to get information</span>
                {show && <div className={styles.dataBox}><i class="fas fa-spinner fa-pulse"></i></div>}
                {data.show && <Nav_Box data={data} />}
                <div className={styles.btnGroup}>
                    {data.show && <button onClick={resetHandler} type="button" className={styles.btn_reset}>{<FontAwesomeIcon icon={faRedoAlt} />}</button>}
                    <Button setText={setText} setdata={setData} show={setShow} city={stringInp} text="Search" />
                </div>
            </form>
        </div>
    )
}

export default Input
