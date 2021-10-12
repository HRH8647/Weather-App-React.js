import React, {useState} from 'react'
//css
import styles from './Nav_Box.module.css'
//components
import TempData from './TempData'
import MoreData from './MoreData'

const Nav_Box = ({ data }) => {

    const [show, setShow] = useState(true)
    const [hide, setHide] = useState(false)

    const clickHandler = (e) => {
        e.preventDefault();
        setHide(false);
        setShow(true);
    }
    const clickHandler2 = (e) => {
        e.preventDefault();
        setHide(true);
        setShow(false);
    }
    return (
        <div className={styles.container}>
            <nav>
                <a onClick={clickHandler} href="https://HamidrezaHomay.ir">Temp</a>
                <a onClick={clickHandler2} href="https://HamidrezaHomay.ir">More</a>
            </nav>
            <div>
                {show && <TempData data={data} />}
                {hide && <MoreData data={data} />}
            </div>
        </div>
    )
}

export default Nav_Box
