import React from 'react';
import Note from "./Note";

const NoteList = ({ data }) => {
    return (
        <ul>
            {
                data.map((note) => {
                        if (!note.done) {
                            return <Note key={note.id} note={note}/>
                        }
                        return null;
                    })
            }
            </ul>
    )
};

export default NoteList;