import React, {useState, useEffect} from 'react'
import style from './Sort.module.scss'

export const Sort = ({setSortPriceUpAndDown}) => {

    const [sortRadio, setSortRadio] = useState('')

    const handleChange = (event) => {
        setSortRadio(event.target.value)
    }

    useEffect(() => {
        setSortPriceUpAndDown(sortRadio)
    })

    return (
        <div className={style.container}>
            <div className={style.title}>Сортировать</div>
            <div className={style.box}>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="sort"
                            onChange={handleChange}
                            value="upPrice"
                            checked={sortRadio === "upPrice"}
                        /> - по возрастанию цены
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="sort"
                            onChange={handleChange}
                            value="downPrice"
                            checked={sortRadio === "downPrice"}
                        /> - по убыванию цены
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="sort"
                            onChange={handleChange}
                            value="time"
                            checked={sortRadio === "time"}
                        /> - по времени в пути</label>
                </div>
            </div>
        </div>
    )
}