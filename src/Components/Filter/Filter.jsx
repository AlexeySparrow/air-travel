import React from 'react'
import style from './Filter.module.scss'
import {Sort} from "./Sort/Sort";
import {Filt} from "./Filt/Filt";
import {Price} from "./Price/Price";
import {Company} from "./Company/Company";

const Filter = ({
                    setFilterAirCompany,
                    setSortPriceUpAndDown,
                    setFilterPrices,
                    filterAirCompany,
                    filterTransfer,
                    setFilterTransfer,
                    allAirCompany,
                    state
                }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Sort setSortPriceUpAndDown={setSortPriceUpAndDown}/>
                <Filt filterTransfer={filterTransfer} setFilterTransfer={setFilterTransfer}/>
                <Price setFilterPrices={setFilterPrices}/>
                <Company
                    setFilterAirCompany={setFilterAirCompany}
                    filterAirCompany={filterAirCompany}
                    allAirCompany={allAirCompany}
                    state={state}
                />
            </div>
        </div>
    )
}

export default Filter