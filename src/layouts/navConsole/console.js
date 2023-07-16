import "./css/console.css";

export function Console(){
    const consoleContainer = document.createElement('div');
    const h3Console = document.createElement('h3');
    const console = document.createElement('textarea');
    consoleContainer.className = "console__container";
    h3Console.className = "console__container--headline";
    console.className = "console";

    h3Console.textContent = "Paste your Code.";

    consoleContainer.append(h3Console, console);
    return consoleContainer;
}

export default Console;