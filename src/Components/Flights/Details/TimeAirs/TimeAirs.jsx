import React from 'react'
import style from './TimeAirs.module.scss'
import Moment from "react-moment";
import 'moment/locale/ru'

export const TimeAirs = ({leg}) => {
    return (
        <div className={style.timeAir}>
            <div>
                <Moment format="HH:mm">{leg.segments[0].departureDate}</Moment>
                <span>
                    <Moment format="DD MMM dd">{leg.segments[0].departureDate}</Moment>
                </span>
            </div>
            <div> ⏱
                {Math.floor(leg.duration / 60)} ч
                {' ' + leg.duration % 60} мин
            </div>
            <div>
                <span>
                    <Moment format="DD MMM dd">{leg.segments[leg.segments.length - 1].arrivalDate}</Moment>
                </span>
                <Moment format="HH:mm">{leg.segments[leg.segments.length - 1].arrivalDate}</Moment>
            </div>
        </div>
    )
}