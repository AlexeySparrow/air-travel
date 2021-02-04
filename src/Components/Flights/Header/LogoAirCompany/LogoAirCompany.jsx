import React from "react";
import style from './LogoAirCompany.module.scss'

import AirBaltic from '../../../../assets/img/airCompany/logo-airbaltic.png'
import AirFrance from '../../../../assets/img/airCompany/logo-air-france.png'
import Alitalia from '../../../../assets/img/airCompany/logo-alitalia.png'
import Brussels from '../../../../assets/img/airCompany/logo-brussels-airlines.png'
import Finnair from '../../../../assets/img/airCompany/logo-finnair.png'
import airKLM from '../../../../assets/img/airCompany/logo-klm.png'
import LOT from '../../../../assets/img/airCompany/logo-LOT.png'
import Pegasus from '../../../../assets/img/airCompany/pegasus-large-logo.png'
import TURK from '../../../../assets/img/airCompany/turk-hava.png'
import aeroflot from '../../../../assets/img/airCompany/logo-aeroflot.png'

export const LogoAirCompany = ({state}) => {

    let logoCompany = (logo) => {
        switch (logo) {
            case "Air Baltic Corporation A/S":
                return <img src={AirBaltic} alt='#'/>;
            case "Air France":
                return <img src={AirFrance} alt='#'/>;
            case "Alitalia Societa Aerea Italiana":
                return <img src={Alitalia} alt='#'/>;
            case "Brussels Airlines":
                return <img src={Brussels} alt='#'/>;
            case "Finnair Oyj":
                return <img src={Finnair} alt='#'/>;
            case "KLM":
                return <img src={airKLM} alt='#'/>;
            case "LOT Polish Airlines":
                return <img src={LOT} alt='#'/>;
            case "Pegasus Hava Tasimaciligi A.S.":
                return <img src={Pegasus} alt='#'/>;
            case "TURK HAVA YOLLARI A.O.":
                return <img src={TURK} alt='#'/>;
            case "Аэрофлот - российские авиалинии":
                return <img src={aeroflot} alt='#'/>;
            default:
                break
        }
    }

    return (
        <div className={style.logo}>
            {
                logoCompany(state.flight.carrier.caption)
            }
        </div>
    )
}