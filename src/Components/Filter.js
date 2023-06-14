import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import {doneNotes} from "../redux/actions/action";

const Filter = () => {
    const dispatch = useDispatch();
    const check = useSelector(state => state.reducer.check);

    const handleDone = () => {
        dispatch(doneNotes());
    };

    return (
        <div className="filter">
            <button className="ui button grey tiny inverted" onClick={handleDone}>{!check ? 'Show Completed' : 'Completed'}</button>
        </div>
    )
};

export default Filter;