import React from 'react'
import style from './Airports.module.scss'
import Line from "../../../Line/Line";

export const Airports = ({leg}) => {
    return(
        <div className={style.route}>
            <div className={style.container}>
                <div>
                    {(!leg.segments[0].departureCity) ? null : leg.segments[0].departureCity.caption + ','}
                    {' ' + leg.segments[0].departureAirport.caption}
                    <span>({leg.segments[0].departureAirport.uid})</span>
                </div>
                <span className={style.arrow}>→</span>
                <div>
                    <span>({leg.segments[leg.segments.length - 1].arrivalAirport.uid})</span>
                    {(!leg.segments[leg.segments.length - 1].arrivalCity) ? null : leg.segments[leg.segments.length - 1].arrivalCity.caption + ','}
                    {' ' + leg.segments[leg.segments.length - 1].arrivalAirport.caption}
                </div>
            </div>
            <Line color='#eeeeee'/>
        </div>
    )
}