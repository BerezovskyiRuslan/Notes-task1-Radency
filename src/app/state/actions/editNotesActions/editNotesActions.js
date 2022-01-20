import { state } from "../../state";

export default function saveEditItemToState(data) {
    console.log(data);
    let newNotes = state.notes.map(item => {
        if (item.id == data.id) {
            item = {...item, ...data};
            console.log(item);
            return item;
        }

        return item;
    })
    console.log(newNotes);
    state.notes = newNotes;


}