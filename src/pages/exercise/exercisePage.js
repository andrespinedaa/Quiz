import { users } from "../../data/user.js";
import WatchComodin from "../../layouts/comodin/watchComodin.js";
import NavbarConsole from "../../layouts/navConsole/navbarConsole.js";
import Card from "../../layouts/card/card.js";
import "./exercisePage.css";

function ExercisePage(){
    const exercisePage = document.createElement("main");
    exercisePage.className = "exercisePage";

    let exerciseInfo = {
        point : 0,
        time: [0, 0, 0],
        done: false
    };

    users[0].exercises.push(exerciseInfo);

    exercisePage.append(WatchComodin(), Card(), NavbarConsole());

    return exercisePage;
}

export default ExercisePage;