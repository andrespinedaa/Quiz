import { users } from "../data/user.js";
import "./css/watch.css";

const watch = document.createElement('div');
const cronometro = document.createElement('div');
watch.className = "watch";
cronometro.className ="cronometro";
let startWatch;

function Watch(pause, currentPoint){

    watch.appendChild(cronometro);
    let seconds = users[0].exercises[currentPoint].time[2];
    let minutes = users[0].exercises[currentPoint].time[1];
    let hour = users[0].exercises[currentPoint].time[0];

    if(!pause){
        startWatch = setInterval(()=>{
            seconds++;
            if(seconds === 60){
                seconds = 0;
                minutes++
                if(minutes === 60){
                    minutes = 0;
                    hour++;
                }
            }
            cronometro.innerText = `${hour}:${minutes}:${seconds}`;

            users[0].exercises[currentPoint].time[2] = seconds;
            users[0].exercises[currentPoint].time[1] = minutes;
            users[0].exercises[currentPoint].time[0] = hour;

        }, 1000);
    }else{
        clearInterval(startWatch);
    }

    return watch;
}

export default Watch;