import SideBar from "../components/sidebar.js";
import Error from "../pages/error/errorPage.js";
import SignUpPage from "../pages/signUp/signUpPage.js";
import ExercisePage from "../pages/exercise/exercisePage.js";

const root = document.querySelector("#root");

root.appendChild(SideBar());

const router = (route) => {
    root.innerHTML = '';
    switch (route) {
        case '#/':
            return root.appendChild(SideBar());
        case '#/signUp':
            return root.appendChild(SignUpPage());
        case '#/logIn':
            return root.appendChild(ExercisePage());
        default:
            root.appendChild(Error());
            break;
    }
}

export default router;