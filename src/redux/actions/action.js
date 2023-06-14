import * as types from "./types";
import {v4 as uuid} from "uuid";

export function addNote(title) {
    return {
        type: types.ADD_NOTE,
        payload: {
            id: uuid(),
            title,
            done: false
        }
    }
}

export function toggleNote(id) {
    return {
        type: types.TOGGLE_NOTE,
        payload: id
    }
}

export function deleteNote(id) {
    return {
        type: types.DELETE_NOTE,
        payload: id
    }
}

export function editNote(title) {
    return {
        type: types.EDIT_NOTE,
        payload: title
    }
}

export function doneNotes(payload) {
    return {
        type: types.DONE_NOTES,
        payload
    }
}
