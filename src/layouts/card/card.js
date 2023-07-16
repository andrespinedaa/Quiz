import { ButtonBack, ButtonNext } from "../../components/buttons.js";
import { observadorButtons } from "../../scripts/store.js";
import { exercises } from "../../data/exercises.js";
import Watch from "../../components/watch.js";
import "./css/card.css";

const cardContent = document.createElement("div");
const cardButtons = document.createElement("div");
const cardExercise = document.createElement("article");
cardContent.className = "card";
cardButtons.className = "card__buttons";
cardExercise.className = "card__exercise";
cardButtons.append(ButtonBack(), ButtonNext());

function Card(){
	let currenPoint = observadorButtons.value;

	const { point, headline, paragraphs, example, solution } = exercises[currenPoint];

	cardExercise.innerHTML = `
		<hgroup class="card__exercise--information">
			<header class="card__exercise--header">
				<h2 class="card__exercise--headline">${headline}</h2>
				<span class="card__number--exercise">${ point + " / " + (exercises.length - 1) }</span>
			</header>
			<div class="card__exercise--context">${(paragraphs.innerHTML = paragraphs.map((text) => {
				return (`<p>${text}</p>`)}).join(""))}</div>
		</hgroup>
		<pre class="card__exercise--code">${example.join("")}</pre>
		<h3>Solution</h3>
		<pre class="card__exercise--solution">${solution.join("")}</pre>
   	`;

	cardContent.append(Watch(false, currenPoint),cardExercise, cardButtons);

	return cardContent;
};
export default Card;