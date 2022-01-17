import Home from "../template/homeTemplate/homeTemplate";
import CreateNotes from "../template/createOrEditTemplate/createOrEditTemplate";
import NoteListTemplate from "../template/notesListTemplate/notesListTemplate";
// import { state } from "../state/state";

// let create;
// let app = document.getElementById('app');

// function renderApp() {

//     let appRender = new Home(state.notes, false, state.category).getTemplate();

    

//     app.innerHTML = appRender;

//     create = document.getElementById('create-note');

//     create.addEventListener('click', () => {
//         let createNoteTemplate = new CreateNotes(true, state.category, null, null).getCreatOrEditTemplate();

//         app.innerHTML = createNoteTemplate;
//     })

//     console.log(create);
// }

export default class Render {
    constructor(state = {}, element) {
        this.state = state;
        this.element = element;
    }

    renderApp() {
        let appRender = new Home(this.state.notes, false, this.state.category).getTemplate();

        this.element.innerHTML = appRender;

        return true;
    }

    renderCreate() {
        let createNoteTemplate = new CreateNotes(true, this.state.category, null, null).getCreatOrEditTemplate();

        this.element.innerHTML = createNoteTemplate;
    }

    renderEdit(id) {
        let note = this.state.notes.filter(item => item.id == id)[0];
        let editNoteTemplate = new CreateNotes(false, this.state.category, null, note).getCreatOrEditTemplate();

        this.element.innerHTML = editNoteTemplate;
    }

    renderActiveOrAcrhiveList(archive, elem) {
        console.log(archive);
        console.log(this.state.notes);
        let newList = new NoteListTemplate(this.state.notes, archive).getNotesList();
        
        elem.innerHTML = newList;
        // console.log(newList);
    }

    renderArchiveList(archive, elem) {
        
    }
}







// export {renderApp};