import { ButtonRamdom } from "../../components/buttons";
import "./css/comodines.css";

const cardComodin = document.createElement('div');
cardComodin.className = "comodines__cardComodin";

export function Comodines(){
    const comodines = document.createElement('div');
    comodines.className = "comodines";
    comodines.append(ButtonRamdom());

    return comodines;
}

export function CardComodines(aleatorio){
    if(aleatorio === 0){
        cardComodin.innerText = 'Busca en google';
    }else if(aleatorio === 1){
        cardComodin.innerText = "Ayuda de un amigo";
    }else if(aleatorio === 2){
        cardComodin.innerText = "programa con los ojos cerrados";
    }
    document.querySelector(".comodines").appendChild(cardComodin);

    return cardComodin;
}