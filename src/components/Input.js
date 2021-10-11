import React, {useState} from 'react'
//components
import Button from './Button'
//functions
import { changeTemp } from '../function/functions'
//css
import styles from '../components/Input.module.css'

const Input = () => {
    const [text, setText] = useState({
        stringInp: ""
    });

    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        show: false,
        temp: 0
    })

    const changeHandler = (e) => {
        setText({
            ...text,
            stringInp: e.target.value
        })
    }
    return (
        <div>
            <form>
                <label className={styles.label_text}>City / Country</label>
                <br />
                <input type="text" value={text.stringInp} onChange={changeHandler} className={styles.input_field} />
                <br />
                <span>please enter city or country to get information</span>
                {show && <div className={styles.dataBox}>Getting Data ...</div>}
                {data.show && <div className={styles.tempBox}>Current Temp :{changeTemp(data.temp)} C</div>}
                <Button setText={setText} setdata={setData} show={setShow} city={text.stringInp} text="Search"/>
            </form>
        </div>
    )
}

export default Input
