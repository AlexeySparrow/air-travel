import React from 'react'
import style from './DetailsCompany.module.scss'

export const DetailsCompany = ({state}) => {
    return(
        <div className={style.company}>
            Рейс выполняет: {state.flight.carrier.caption}
        </div>
    )
}