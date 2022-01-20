import HomeController from "./controller/homeController/homeController";

export default function starts() {
    let app = document.getElementById('app');
    new HomeController(app).renderHome();
}