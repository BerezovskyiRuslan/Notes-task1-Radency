import { state } from "../../state";

export default function saveEditItemToState(data) {
    let newNotes = state.notes.map(item => {
        if (item.id == data.id) {
            item = {...item, ...data};

            return item;
        }

        return item;
    })
    
    state.notes = newNotes;
}