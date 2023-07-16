import { observadorButtons } from "./store.js";
import { users } from "../data/user.js";
import setDoneIt from "./setDoneIt.js";
import Card from "../layouts/card/card.js";
import Watch from "../components/watch.js";

export function confirmAdvance( currentPoint, type ) {

    switch (type){
        case "advance":
            if (confirm('¿QUIERES AVANZAR? ¡Al dar "Ok" comenzara el nuevo cronometro!')){
                Watch(true, currentPoint);
                setDoneIt(currentPoint, confirm('¿Desea marcar el punto como terminado?'));
                currentPoint++;

                let exerciseInfo = {
                    point : currentPoint,
                    time: [0, 0, 0],
                    done: false
                };

                if(!(users[0].exercises.some((exersice) => exersice.point === exerciseInfo.point))){
                    users[0].exercises.push(exerciseInfo);
                }
                console.log(users[0].exercises);
                observadorButtons.actualizarEstado(currentPoint);
                Card();
            };
            break;

        case "goBack":
            if(confirm('¿QUIERES RETROCERDER? ¡Al dar "OK" comenzara el cronometro donde lo dejaste')){
				Watch(true, currentPoint);
				setDoneIt(currentPoint, confirm("¿Desea marcar el punto como terminado?"));
				currentPoint--;
                console.log(users[0].exercises);
				observadorButtons.actualizarEstado(currentPoint);
				Card();
			}
            break;

        case "jumpPoint":
            if(confirm('¿QUIERES SALTAR DE PUNTO? ¡Al dar "OK" comenzara el cronometro donde lo dejaste')){
                
                if(!(currentPoint < users[0].exercises.length)){
                    for(var i = users[0].exercises.length - 1; i <= currentPoint - 1; i++){
                        let exerciseInfo = {
                            point : i + 1,
                            time: [0, 0, 0],
                            done: false
                        };
                        users[0].exercises.push(exerciseInfo);
                        setDoneIt(i, false);
                    }
                }

                Watch(true, currentPoint);

                console.log(users[0].exercises);
                observadorButtons.actualizarEstado(currentPoint);
                Card();
            }
            break;

        default:
            break;
    }
}