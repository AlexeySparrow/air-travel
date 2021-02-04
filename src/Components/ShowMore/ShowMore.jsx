import React from 'react'
import style from './ShowMore.module.scss'

const ShowMore = ({setVisible, add}) => {

    const showMore = () => {
        setVisible(prev => prev + add)
    }

    return (
        <div className={style.container}>
            <button onClick={() => showMore()}>Показать еще</button>
        </div>
    )
}

export default ShowMore