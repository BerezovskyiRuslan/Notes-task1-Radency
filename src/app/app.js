import Render from "./render/render";
import { state } from "./state/state";


export default function starts() {
    let app = document.getElementById('app');

    let render = new Render(state, app);
    
    new Promise(function (resolve, reject) {
        resolve(render.renderApp(state, app));
    }).then(() => {});
}