import { Comodines } from "./comodines";
import { ButtonExit, ButtonSave } from "../../components/buttons";
import "./css/watchComodin.css";


const cardButtonsLeave = document.createElement("div");
cardButtonsLeave.className = "card__buttons";
cardButtonsLeave.append(ButtonExit(), ButtonSave());

function WatchComodin(){
    const watchComodin = document.createElement("aside");
    watchComodin.className = "watch-comodin";

    watchComodin.append(Comodines(), cardButtonsLeave);
    return watchComodin;
}

export default WatchComodin;