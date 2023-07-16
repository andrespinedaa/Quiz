import NavBar from "./navbar.js";
import Console from "./console.js";
import "./css/navbarConsole.css";

function NavbarConsole(){
    const navConsole = document.createElement('aside');
    navConsole.className = "navbar-console";
    navConsole.append( Console(), NavBar());
    return navConsole;
}

export default NavbarConsole;