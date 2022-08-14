import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    //let [value1, setValue1] = useState(0)
    let [value2, setValue2] = useState([0, 100])

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value2}</span>
                <SuperRange
                    onChangeRange={setValue2}
                    value={value2}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.box}>
                <span>{value2}</span>
                <SuperDoubleRange
                    onChangeRange={setValue2}
                    value={value2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
