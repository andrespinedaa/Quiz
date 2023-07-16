import { users } from "../data/user";

function setDoneIt(currentPoint, type){
    if(type){
        users[0].exercises[currentPoint].done = true;
        document.querySelectorAll(".navbar__menu--item")[currentPoint].childNodes[1].classList.toggle("complete", true);
        document.querySelectorAll(".navbar__menu--item")[currentPoint].childNodes[2].classList.toggle("uncomplete", false);
    }else{
        users[0].exercises[currentPoint].done = false;
        document.querySelectorAll(".navbar__menu--item")[currentPoint].childNodes[1].classList.toggle("complete", false);
        document.querySelectorAll(".navbar__menu--item")[currentPoint].childNodes[2].classList.toggle("uncomplete");
    }
}

export default setDoneIt;