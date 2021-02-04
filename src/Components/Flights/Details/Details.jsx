import style from './Details.module.scss'
import {Airports} from "./Airports/Airports";
import {TimeAirs} from "./TimeAirs/TimeAirs";
import {Transfer} from "./Transfer/Transfer";
import {DetailsCompany} from "./DetailsCompany/DetailsCompany";

export const Details = ({state}) => {
    return (
        <div>
            {
                state.flight.legs.map((leg, i) =>
                    <div className={style.legs} key={i}>
                        <Airports leg={leg}/>
                        <TimeAirs leg={leg}/>
                        <Transfer state={state}/>
                        <DetailsCompany state={state}/>
                    </div>
                )
            }
        </div>
    )
}