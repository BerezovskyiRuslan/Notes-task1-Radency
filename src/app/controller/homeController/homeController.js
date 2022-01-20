import Controller from "../controller";
import updateIsArchiveVisible from "../../state/actions/updateIsArchiveActions/updateIsArchiveActions";
import { deleteStateItem, deleteStateAll } from '../../state/actions/deleteNotesActions/deleteNotesActions.js';
import addOrDeleteNotesToArchive from "../../state/actions/addOrDeleteToArchiveActions/addOrDeleteToArchiveActons";
import { 
    showFormCreateNoteEvent,
    checkVisibleList,
    deleteNoteToState,
    deleteAllNotesToState,
    addOrDeleteToArchive,
    editItemNotes,
    saveEditNote,
    showItemFull,
    closeForm
} from "../../events/events";

export default class HomeController extends Controller {
    constructor(mainElement) {
        super(mainElement)
    }


    renderHome() {
        let render = new Promise((resolve, reject) => {
            resolve(this.render.renderApp());
        })
        
        render.then(() => {
            showFormCreateNoteEvent();
            checkVisibleList();
            deleteNoteToState();
            deleteAllNotesToState();
            addOrDeleteToArchive();
            editItemNotes();
            showItemFull();
        })
    }

    renderNodesList() {
        super.setArchive();
        
        let listNotes = document.getElementById('notes-list');

        updateIsArchiveVisible();

        this.render.renderActiveOrAcrhiveList(super.getArhive(), listNotes);

        this.visibleIconArchive();

        deleteNoteToState();
        addOrDeleteToArchive();
        editItemNotes();
        showItemFull();
    }

    deleteNoteToList(id) {
        let listNotes = document.getElementById('notes-list');

        deleteStateItem(id);

        this.render.renderActiveOrAcrhiveList(super.getArhive(), listNotes);
        this.render.renderFooter();

        deleteNoteToState();
        addOrDeleteToArchive();
        editItemNotes();
        showItemFull();
    }

    deleteAllNotesToList() {
        let listNotes = document.getElementById('notes-list');

        deleteStateAll();

        this.render.renderActiveOrAcrhiveList(super.getArhive(), listNotes);
        this.render.renderFooter();

        deleteAllNotesToState();
        editItemNotes();
        showItemFull();
    }

    addOrDeleteToArchive(id) {
        addOrDeleteNotesToArchive(id);

        let listNotes = document.getElementById('notes-list');

        this.render.renderActiveOrAcrhiveList(this.getArhive(),listNotes);
        this.render.renderFooter();

        deleteNoteToState();
        addOrDeleteToArchive();
        editItemNotes();
        showItemFull();
    }

    editNote(id) {
        this.render.renderEdit(id);

        saveEditNote();
        closeForm();         
    }

    visibleIconArchive() {
        let noteIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="header-button-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>`
        let archiveIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="header-button-icon" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                <path fill-rule="evenodd"
                                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                    clip-rule="evenodd" />
                            </svg>`

        let buttonVisibleArchive = document.getElementById('visible-list');
        
        buttonVisibleArchive.innerHTML = this.getArhive() ? noteIcon : archiveIcon;


    }

    visibleFullNote(id) {
        let fullNotes = document.querySelectorAll('.content-list-notes-item-full');
        let visibleIcon = document.querySelectorAll('.container-visible-icon');
        let itemNote;
        
        fullNotes.forEach((element, index) => {
            if (element.getAttribute('name') == id) {
                itemNote = element;
                visibleIcon = visibleIcon[index]
            }
        });

        if (itemNote.classList.contains('display-none')) {

            itemNote.classList.remove('display-none');
            visibleIcon.style.transform = 'rotate(180deg)';

        } else {

            itemNote.classList.add('display-none');
            visibleIcon.style.transform = 'rotate(0deg)';
            
        }
    }

}