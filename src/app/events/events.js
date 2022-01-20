import CreateController from "../controller/createController/createController";
import HomeController from "../controller/homeController/homeController";

function showFormCreateNoteEvent() {
    let event = document.getElementById('create-note');

    event.addEventListener('click', () => {
        new CreateController().renderCreateNote();
    })
}   

function checkVisibleList() {
    let event = document.getElementById('visible-list');

    event.addEventListener('click', () => {
        new HomeController().renderNodesList();
    })
}

function deleteNoteToState() {
    let events = document.querySelectorAll('.delete-item');
    
    events.forEach(element => {
        element.addEventListener('click', (event) => {
            event.stopPropagation();

            new HomeController().deleteNoteToList(document.activeElement.name);
        })
    })
}

function deleteAllNotesToState() {
    let event = document.getElementById('delete-all-notes');

    event.addEventListener('click', () => {
        new HomeController().deleteAllNotesToList();
    })
}

function createNewNote() {
    let event = document.getElementById('create-new-note');

    event.addEventListener('click', () => {
        let date = new Date();
        let month = date.toLocaleDateString('en-US', {
            month: 'long'
        })
        let day = date.getDate();
        let year = date.getFullYear();
        let select = document.getElementById('select-create-note');
        let name = document.getElementById('name-create-note').value;
        let category = select.options[select.selectedIndex].value;
        let content = document.getElementById('content-create-note').value;
        let dates = content.match(/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}/g);
        let created = month + ' ' + day + ', ' + year;
        let archive = false;

        new CreateController().createNewNote({
            name: name,
            created: created,
            category: category,
            content: content,
            dates: dates,
            archive: archive
        })
    })
}

function addOrDeleteToArchive() {
    let events = document.querySelectorAll('.add-or-delete-archive');

    events.forEach(element => {
        element.addEventListener('click', (event) => {
            event.stopPropagation();
            new HomeController().addOrDeleteToArchive(document.activeElement.name);
        })
    })
}

function editItemNotes() {
    let events = document.querySelectorAll('.edit-note');

    events.forEach(element => {
        element.addEventListener('click', (event) => {
            event.stopPropagation();
            new HomeController().editNote(document.activeElement.name);
        });
    });
}

function saveEditNote() {
    let event = document.getElementById('save-edit-note');

    event.addEventListener('click', () => {
        let select = document.getElementById('select-create-note');
        let name = document.getElementById('name-create-note').value;
        let category = select.options[select.selectedIndex].value;
        let content = document.getElementById('content-create-note').value;
        let dates = content.match(/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}/g);
        dates = dates != null ? dates : [];

        new CreateController().saveEditItemNote({
            id: event.name,
            name: name,
            category: category,
            content: content,
            dates: dates
        })
    })
}

function showItemFull() {
    let event = document.querySelectorAll('.container-content-list-notes-items')

    event.forEach(element => {
        element.addEventListener('click', () => {

            new HomeController().visibleFullNote(element.getAttribute('name'));
       
        })
    })
}

function closeForm() {
    let event = document.getElementById('close-form');

    event.addEventListener('click', () => {
        new HomeController().renderHome();
    })
}

export { 
    showFormCreateNoteEvent,
    checkVisibleList,
    deleteNoteToState,
    deleteAllNotesToState,
    createNewNote,
    addOrDeleteToArchive,
    editItemNotes,
    saveEditNote,
    showItemFull,
    closeForm
};