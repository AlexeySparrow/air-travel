import React, {useEffect, useState} from 'react'
import style from './Flights.module.scss'
import {Details} from "./Details/Details"
import {Header} from "./Header/Header";
import ShowMore from "../ShowMore/ShowMore";

const Flights = ({state, setAllAirCompany, initialState}) => {

    const [visible, setVisible] = useState(5)
    const [add] = useState(5)

    useEffect(() => {
        const airCompanyArray = [...new Set(initialState.map(i => i.flight.carrier.caption).sort())]
        setAllAirCompany(airCompanyArray)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {
                    state.slice(0, visible).map((state, i) =>
                        <div className={style.boxFlight} key={i}>
                            <Header state={state}/>
                            <Details state={state}/>
                            <button>Выбрать</button>
                        </div>)
                }
            </div>
            <ShowMore
                setVisible={setVisible}
                add={add}
            />
        </div>
    )
}

export default Flights