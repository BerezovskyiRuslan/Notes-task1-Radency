import Render from "../render/render";  
import { state } from "../state/state";

export default class Controller {
    constructor(mainElemet) {
        this.app = mainElemet;
        this.isArchive = state.isArchiveVisible;
        this.state = state;
        this.render = new Render(state, app);
    }

    getArhive() {
        return this.isArchive;
    }

    setArchive() {
        this.isArchive = !this.isArchive;
    }
}