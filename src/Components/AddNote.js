import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addNote} from "../redux/actions/action";

const AddNote = props => {

    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleAdd(e) {
        e.preventDefault();
        if (value.trim() !== "") {
            dispatch(addNote(value));
            setValue("");
        } else {
            alert("Please write some notes below!")
        }
    }

    return (
        <form className="ui form large">
            <button className="ui button blue" onClick={handleAdd}>
                {/*<i className="plus icon large" />*/}
                Add
            </button>
            <input type="text" placeholder="Add some notes..." value={value} onChange={handleChange}/>
        </form>
    )
};

export default AddNote;