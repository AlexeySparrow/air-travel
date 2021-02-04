import React from 'react'
import style from './Price.module.scss'

export const PriceTicket = ({state}) => {

    let age = state.flight.price.passengerPrices[0].passengerType.caption

    return (
        <div className={style.price}>
            <span>{state.flight.price.total.amount} ₽</span>
            <span>
                    Стоимость для одного <span className={style.age}>{age.substring(0, age.length - 2) + 'ого'}</span> пассажира
            </span>
        </div>
    )
}