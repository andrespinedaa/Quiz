import { exercises } from "../../data/exercises";
import { ButtonPoint } from "../../components/buttons.js";
import completeUrl from "../../assets/icons/complete.svg";
import unCompleteUrl from "../../assets/icons/uncomplete.svg";
import "./css/navbar.css";

function NavBar(){
    const navbar =  document.createElement('nav');
    const menu =  document.createElement('ul');
    navbar.className = "navbar";
    menu.className = "navbar__menu";
    navbar.appendChild(menu);
    
    for( let i = 0; i <= (exercises.length - 1); i++){
        const itemMenu = document.createElement('li');
        const complete = document.createElement('img');
        const unComplete = document.createElement('img');
        itemMenu.className = "navbar__menu--item";
        complete.className = "checked";
        unComplete.className = "checked";
        complete.src = completeUrl;
        unComplete.src = unCompleteUrl;
        itemMenu.append(ButtonPoint(i), complete, unComplete);

        menu.appendChild(itemMenu);
    }

    return navbar 
}

export default NavBar;