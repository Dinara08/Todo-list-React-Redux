import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {deleteNote, editNote, toggleNote} from "../redux/actions/action";

const Note = ({note}) => {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(note.title);

    const dispatch = useDispatch();

    function handleToggle() {
        if (!note.done) {
            let snd = new Audio('assets/sounds/sound.wav');
            snd.play();
        }
        dispatch(toggleNote(note.id));
    }

    function handleDelete() {
        const confirm = window.confirm('Are you sure to delete this note?');
        if (confirm) {
            dispatch(deleteNote(note.id));
        }
    }

    const checkStyle = {
        textDecoration: 'line-through',
        color: '#aaa'
    };

    function onChangeText(e) {
        setName(e.target.value)
    }

    return (
        <li className="note">
            <div style={{display: 'flex', height: 40, alignItems: 'center'}}>
                <label style={{marginRight: '1rem', display: 'flex'}}>
                    <input type="checkbox" className="blue"
                           style={{ cursor: 'pointer' }}
                           onChange={handleToggle}
                           checked={note.done}
                    />
                </label>
                <label style={note.done ? checkStyle : null}>
                    {edit ?
                        <input type="text" className="edit-inp" value={name}
                               onChange={onChangeText}/>
                        : note.title}
                </label>
            </div>
            <div>
                <button onClick={() => {
                    dispatch(editNote({
                        ...note, title: name
                    }));
                    setEdit(!edit);
                }
                }>
                    <i className="icon edit outline outline large yellow"> </i>
                </button>
                <button onClick={handleDelete}>
                    <i className="icon trash alternate outline large red"> </i>
                </button>

            </div>
        </li>
    )
};

export default Note;