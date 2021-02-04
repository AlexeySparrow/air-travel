import React, {useState, useEffect} from 'react'
import style from './Price.module.scss'

export const Price = ({setFilterPrices}) => {

    const [priceFrom, setPriceFrom] = useState(0)
    const [priceTo, setPriceTo] = useState(200000)

    useEffect(() => {
        setFilterPrices({from: priceFrom, to: priceTo})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [priceFrom, priceTo])

    return (
        <div className={style.container}>
            <div className={style.title}>Цена</div>
            <div className={style.box}>
                <div>
                    <label>От </label>
                    <input
                        type="number"
                        min="0"
                        step="1000"
                        value={priceFrom}
                        onChange={event => setPriceFrom(event.target.value)}
                    />
                </div>
                <div>
                    <label>До </label>
                    <input
                        type="number"
                        min="0"
                        step="1000"
                        value={priceTo}
                        onChange={event => setPriceTo(event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}