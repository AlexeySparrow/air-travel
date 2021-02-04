import React from 'react'
import style from './Company.module.scss'

export const Company = ({setFilterAirCompany, filterAirCompany, allAirCompany, state}) => {

    const handleChecked = event => {
        const comp = allAirCompany[event.target.dataset.id];
        let newCheckedValues = filterAirCompany.filter(item => item !== comp);
        if (event.target.checked) newCheckedValues.push(comp);
        setFilterAirCompany(newCheckedValues);
    };

    let minPrice = (item) => {
        return state.filter(i => i.flight.carrier.caption === item).map(i => i.flight.price.total.amount).sort((a, b) => a - b).shift()
    }

    return (
        <div className={style.container}>
            <div className={style.title}>Авиакомпании</div>
            <div className={style.box}>
                {
                    allAirCompany.map((item, id) =>
                        <div key={id} className={style.string}>
                            <label title={item}>
                                <input
                                    type="checkbox"
                                    data-id={id}
                                    onClick={handleChecked}
                                    disabled={!minPrice(item) ? 'disabled' : null}
                                /> - {item}</label>
                            <div>
                                <span>от</span>
                                <span>{!minPrice(item) ? " - " : minPrice(item)}₽</span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}