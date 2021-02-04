import React, {useState, useEffect} from 'react'
import Filter from "../../Components/Filter/Filter"
import Flights from "../../Components/Flights/Flights"
import * as axios from "axios"
import {NoState} from "../../Components/NoState/NoState";

export const SearchPage = () => {

    //Data
    const [state, setState] = useState([])
    const [allAirCompany, setAllAirCompany] = useState([])

    // Filters
    const [filterAirCompany, setFilterAirCompany] = useState([])
    const [sortPriceUpAndDown, setSortPriceUpAndDown] = useState('')
    const [filterPrices, setFilterPrices] = useState({from: '', to: ''})
    const [filterTransfer, setFilterTransfer] = useState([])

    //Download array data
    useEffect(() => {
        let Data = axios.get('https://alexeysparrow.github.io/air-travel/flights.json').then(responce => {
            setState(responce.data.result.flights)
        })
        setState(Data)
    }, [])

    //Filter transfer ( filterTransfer )
    const getFilterTransfer = () => {
        if (filterTransfer.includes('1 пересадка')) {
            return state.filter(i => i.flight.legs.length > 1)
        } else if (filterTransfer.includes('без пересадок')) {
            return state.filter(i => i.flight.legs.length === 1)
        } else {
            return state
        }
    }
    const sortTransfer = getFilterTransfer()

    //Filter prices from and to ( filterPrices )
    const getFilterPrice = () => {
        return sortTransfer.filter(i =>
            +i.flight.price.total.amount >= +filterPrices.from
            && +i.flight.price.total.amount <= +filterPrices.to
        )
    }
    const sortPrices = getFilterPrice()

    //Filter by airports ( filterAirCompany )
    const getFilterCompany = () => {
        if (filterAirCompany.length === 0) {
            return sortPrices;
        }
        return sortPrices.filter(i => filterAirCompany.includes(i.flight.carrier.caption))
    }
    const filterCompany = getFilterCompany()

    //Sort by price up and down ( sortPriceUpAndDown )
    useEffect(() => {
        let copyState = state.concat()

        let sortState = (s) => {
            // eslint-disable-next-line default-case
            switch (s) {
                case 'upPrice' :
                    return copyState.sort((a, b) => a.flight.price.total.amount - b.flight.price.total.amount)
                case 'downPrice' :
                    return copyState.sort((a, b) => b.flight.price.total.amount - a.flight.price.total.amount)
                case 'time' :
                    return copyState.sort((a, b) => a.flight.legs.map(a => a.duration).reduce((a, b) => a + b) - b.flight.legs.map(a => a.duration).reduce((a, b) => a + b))
            }
        }
        sortState(sortPriceUpAndDown)

        setState(copyState)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortPriceUpAndDown])

    return (
        <>
            <Filter
                setFilterAirCompany={setFilterAirCompany}
                setSortPriceUpAndDown={setSortPriceUpAndDown}
                setFilterPrices={setFilterPrices}
                setFilterTransfer={setFilterTransfer}
                filterAirCompany={filterAirCompany}
                filterTransfer={filterTransfer}
                allAirCompany={allAirCompany}
                state={sortPrices}
            />
            {(filterCompany.length !== 0) ? <Flights
                initialState={state}
                state={filterCompany}
                setAllAirCompany={setAllAirCompany}
            /> : <NoState/>}
        </>
    )
}