import { state } from "../../state";

export default function addNote(data) {
    data.id = state.notes.length;
    state.notes = [...state.notes, data];
}