import React from 'react'
import style from './Transfer.module.scss'
import Line from "../../../Line/Line";

export const Transfer = ({state}) => {
    return(
        <div className={style.transfer}>
            <Line color='#bdbdbd'/>
            <span>{state.flight.legs.length - 1} пересадка</span>
            <Line color='#bdbdbd'/>
        </div>
    )
}