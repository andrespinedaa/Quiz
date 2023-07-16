import router from "./src/router/routes";
import "./style.css";

window.addEventListener('hashchange', () => {
    router(window.location.hash);
})

