import { state } from "../../state";

function deleteStateItem(id) {
    let newStateNotes = state.notes.filter(item => item.id != id)
    
    state.notes = newStateNotes;
}

function deleteStateAll() {
    let newStateNotes = state.notes.filter(item => item.archive !== state.isArchiveVisible)

    state.notes = newStateNotes;
}

export { deleteStateItem, deleteStateAll }
