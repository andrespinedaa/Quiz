import { CardComodines, Comodines } from "../layouts/comodin/comodines.js";
import { observadorButtons } from "../scripts/store.js";
import { confirmAdvance } from "../scripts/confirm.js";
import { exercises } from "../data/exercises.js";
import { users, User } from "../data/user.js";
import Watch from "./watch.js";
import "./css/buttons.css";

export function ButtonBack() {
	const BackButton = document.createElement("button");
	BackButton.className = "button__back";
	BackButton.innerText = "Back";
	
	BackButton.addEventListener("click", () => {
		let currentPoint = observadorButtons.value;
		if (currentPoint != 0) {
			confirmAdvance(currentPoint, "goBack");
		}
	});

	return BackButton;
}

export function ButtonNext() {
	const NextButton = document.createElement("button");
	NextButton.className = "button__next";
	NextButton.innerText = "Next";
	
	NextButton.addEventListener("click", () => {
		let currentPoint = observadorButtons.value;
		if (currentPoint != exercises.length - 1) {
			confirmAdvance(currentPoint, "advance");
		}
	});

	return NextButton;
}

export function ButtonExit() {
	const ExitButton = document.createElement("button");
	ExitButton.className = "button__exit";
	ExitButton.innerHTML = `
        <a href="#/" title="Exit" class="button__link">Exit</a>
    `;

	ExitButton.addEventListener("click", () =>{
		let currentPoint = observadorButtons.value;
		Watch(true, currentPoint);
	})

	return ExitButton;
}

export function ButtonSave(){
	const SaveButton = document.createElement("button");
	SaveButton.className = "button__save";
	SaveButton.innerText = "Save";
	SaveButton.innerHTML = `
		<a href="#/" title="Exit" class="button__link">Save</a>
	`;

	SaveButton.addEventListener("click", () => {
		console.log("clicked save button");
	})

	return SaveButton;
}

export function ButtonSubmit(){	
	const submitButton = document.createElement('button');
	submitButton.className = "button__form button__link";
	submitButton.innerText = "submit";

	submitButton.addEventListener("click", (e) => {
		e.preventDefault();
		let newPlayer = new User(document.querySelector("#nameInput").value);
		users.push(newPlayer);
		document.querySelector("#nameInput").value = '';
		window.history.back()
	})

	return submitButton;
}

export function ButtonRamdom(){
	const RamdomButton = document.createElement("button");
	RamdomButton.className = "button__ramdom";
	RamdomButton.innerText = "¿Que sera?";
	RamdomButton.addEventListener("click", () => {
		Comodines()
		CardComodines(Math.floor(Math.random() * 3))
	})
	return RamdomButton;
}

export function ButtonPoint(i){
	const buttonPoint = document.createElement('button');
	buttonPoint.className = "button__point ";
	buttonPoint.innerText = `${i}`;

	buttonPoint.addEventListener("click", () =>{
		let currentPoint = observadorButtons.value;
		if(currentPoint != i){
			confirmAdvance(currentPoint = i, "jumpPoint");
		}
	});
	
	return buttonPoint;
}