import Home from "../template/homeTemplate/homeTemplate";
import CreateNotes from "../template/createOrEditTemplate/createOrEditTemplate";
import NoteListTemplate from "../template/notesListTemplate/notesListTemplate";
import Footer from "../template/footerTemplate/footerTemplate";

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
        let createNoteTemplate = new CreateNotes(true, this.state.category, null).getCreatOrEditTemplate();

        this.element.innerHTML = createNoteTemplate;
    }

    renderEdit(id) {
        let note = this.state.notes.filter(item => item.id == id)[0];
        let editNoteTemplate = new CreateNotes(false, this.state.category, null, note).getCreatOrEditTemplate();

        this.element.innerHTML = editNoteTemplate;
    }

    renderActiveOrAcrhiveList(archive, elem) {
        let newList = new NoteListTemplate(this.state.notes, archive).getNotesList();
        
        elem.innerHTML = newList;
    }

    renderFooter() {
        let footer = new Footer(this.state.notes, this.state.category).getFooterList();

        document.getElementById('footer').innerHTML = footer;
    }
}







// export {renderApp};