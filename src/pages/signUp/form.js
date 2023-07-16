import { ButtonSubmit } from "../../components/buttons";
import "./css/form.css";

function Form(){
    const form = document.createElement('form');
    form.className = "form__exercise";

    form.innerHTML = `
        <fieldset class="campus">
            <label for="username">Username</label>
            <input type="text" name="username" class="input__sign-up" id="nameInput" focus/>
        </fieldset>
        <fieldset class="campus">
            <label for="email">Email</label>
            <input type="email" name="email" class="input__sign-up" id="emailInput" />
        </fieldset>
        <fieldset class="campus">
            <label for="password">Password</label>
            <input type="password" name="password" class="input__sign-up" id="passwordInput" />
        </fieldset>
    `;

    form.appendChild(ButtonSubmit());
    return form;
}

export default Form;