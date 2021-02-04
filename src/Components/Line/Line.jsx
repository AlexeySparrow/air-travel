import React from 'react'
import style from './Line.module.scss'

const Line = ({color}) => {
    return (
        <div className={style.line} style={{background: color}}/>
    )
}

export default Line