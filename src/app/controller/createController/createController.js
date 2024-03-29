import Controller from '../controller.js';
import addNote from '../../state/actions/addNotesActions/addNotesActions.js';
import saveEditItemToState from '../../state/actions/editNotesActions/editNotesActions.js';
import HomeController from '../homeController/homeController.js';
import { createNewNote, closeForm} from '../../events/events.js';

export default class CreateController extends Controller {
    constructor(mainElement) {
        super(mainElement);
    }

    renderCreateNote() {
        let result = new Promise((resolve, reject) => {
            resolve(this.render.renderCreate());
        })
        .then(() => {
            createNewNote();
            closeForm();
        })
    }

    createNewNote(data) {
        if (!data.name.trim().length) {
            data.name = 'New Note';
        }
        addNote(data);

        new HomeController().renderHome();

    }

    saveEditItemNote(data) {
        if (!data.name.trim().length) {
            data.name = 'Edit Note';
        }

        saveEditItemToState(data);

        new HomeController().renderHome();
    }
}