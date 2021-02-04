import React from 'react'
import style from './assets/scss/App.module.scss'
import {SearchPage} from "./Pages/SearchPage/SearchPage";

function App() {
    return (
        <div className={style.container}>
            <SearchPage />
        </div>
    );
}

export default App
