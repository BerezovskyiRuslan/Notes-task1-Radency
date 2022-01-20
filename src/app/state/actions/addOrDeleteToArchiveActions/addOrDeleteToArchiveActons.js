import { state } from "../../state";

export default function addOrDeleteNotesToArchive(id) {
    let newStateNotes = state.notes.filter(item => {
        if (item.id == id) {
            item.archive = !item.archive;
        }
        return item
    });

    state.notes = newStateNotes;
}