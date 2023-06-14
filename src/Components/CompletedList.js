import React from 'react';
import Note from "./Note";
import {useSelector} from "react-redux";

const CompletedList = ({data}) => {
    const check = useSelector(state => state.reducer.check);

    return (
        <ul>
            {
                data.map((note) => {
                    if (note.done) {
                        if (check) {
                            return <Note key={note.id} note={note}/>
                        }
                    }
                    return null;
                })
            }
        </ul>
    );
};

export default CompletedList;