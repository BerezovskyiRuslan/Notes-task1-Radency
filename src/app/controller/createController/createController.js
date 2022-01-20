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
        addNote(data);

        new HomeController().renderHome();

    }

    saveEditItemNote(data) {
        saveEditItemToState(data);

        new HomeController().renderHome();
    }
}