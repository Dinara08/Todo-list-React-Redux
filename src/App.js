import React from 'react';
import AddNote from "./Components/AddNote";
import NoteList from "./Components/NoteList";
import Filter from "./Components/Filter";
import CompletedList from "./Components/CompletedList";
import {useSelector} from "react-redux";

const App = () => {
    const todos = useSelector(state => state.reducer.notes);

    return (
        <div className="todo-wrap">
            <div className="add-field">
                <AddNote/>
                <NoteList data={todos}/>
                <Filter/>
                <CompletedList data={todos}/>
            </div>
        </div>
    )
};

export default App;
