import Form from "./form";
import heroImage from "../../assets/images/olympic-games.png";
import { ButtonExit } from "../../components/buttons";
import "./css/signUpPage.css";

function SignUpPage(){
    const SignUpPage =  document.createElement("main");
    const heroImageContainer = document.createElement('figure');
    heroImageContainer.className = "figure__logIn"
    heroImageContainer.innerHTML = `
        <img src=${heroImage} alt="olympic image" class="hero-image-olimpiadas">
    `
    SignUpPage.className = "signUpPage";
    SignUpPage.append(Form(), heroImageContainer);

    return SignUpPage;
}
export default SignUpPage;