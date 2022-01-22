import './styles.css';
import backgroundImage from './background.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());


console.log("JS is working fine. No Problems here.");