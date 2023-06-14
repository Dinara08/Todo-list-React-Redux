// import {ADD_NOTE, DELETE_NOTE, DONE_NOTES, EDIT_NOTE, TOGGLE_NOTE} from "../actions/types";
import * as types from "../actions/types";

const initialState = {
    notes: [],
    check: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_NOTE :
            return {
                ...state,
                notes: [...state.notes, action.payload]
            };
        case types.TOGGLE_NOTE :
            const notes = state.notes.map((note) => note.id === action.payload
                ? {...note, done: !note.done} : note
            );
            return {...state, notes};
        case types.DELETE_NOTE :
            const cut = state.notes.filter((note) => note.id !== action.payload);
            return {...state, notes: cut};
        case types.EDIT_NOTE:
            const edit = state.notes.map((note) => note.id === action.payload.id
                ? {...action.payload} : note
            );
            return {...state, notes: edit};
        case types.DONE_NOTES :
            return {
                ...state,
                check: !state.check
            };
        default:
            return state;
    }
}

export default reducer;