import React from 'react'
import style from './Header.module.scss'
import {LogoAirCompany} from "./LogoAirCompany/LogoAirCompany";
import {PriceTicket} from "./PriceTicket/PriceTicket";

export const Header = ({state}) => {
    return (
        <div className={style.header}>
            <LogoAirCompany state={state}/>
            <PriceTicket state={state}/>
        </div>
    )
}