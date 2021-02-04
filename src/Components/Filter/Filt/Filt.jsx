import React from 'react'
import style from './Filt.module.scss'

export const Filt = ({filterTransfer, setFilterTransfer}) => {

    const transfer = [
        '1 пересадка',
        'без пересадок'
    ]

    const handleChecked = event => {
        const comp = transfer[event.target.dataset.id];
        let newCheckedValues = filterTransfer.filter(item => item !== comp);
        if (event.target.checked) newCheckedValues.push(comp);
        setFilterTransfer(newCheckedValues);
    };

    return (
        <div className={style.container}>
            <div className={style.title}>Фильтровать</div>
            <div className={style.box}>
                {
                    transfer.map((item, id) =>
                        <div key={id}>
                            <label>
                                <input
                                    type="checkbox"
                                    data-id={id}
                                    onClick={handleChecked}
                                /> - {item}</label>
                        </div>
                    )
                }
            </div>
        </div>
    )
}