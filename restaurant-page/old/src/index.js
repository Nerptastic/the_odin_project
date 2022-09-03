import './styles.css';
import header from './header.js';
import content from './content.js';
import sectionOne from './sectionOne.js';
import sectionTwo from './sectionTwo.js';
import sectionThree from './sectionThree.js';
import footer from './footer.js';

function section() {
  const section = document.createElement('section');
  section.setAttribute('id', 'section');
  section.innerHTML = 
  `
  <h2>TYCO'S MEANZZ RESTAURANT.</h2>
  <p>COME IN, GET SOME <strong>BOOMIN</strong> EATS, LEAVE BEFORE WE GET TO THE STATE OF RAMBUNCTIOUSNESS.</p>
  `;

  return section;
}

document.body.appendChild(header());

document.body.appendChild(section());

const buttonOne = document.getElementById('btn1');
const buttonTwo = document.getElementById('btn2');
const buttonThree = document.getElementById('btn3');

buttonOne.addEventListener('click', function() {content('sectionOne')});
buttonTwo.addEventListener('click', function() {content('sectionTwo')});
buttonThree.addEventListener('click', function() {content('sectionThree')});

document.body.appendChild(footer());
document.body.appendChild(sectionOne());
document.body.appendChild(sectionTwo());
document.body.appendChild(sectionThree());

console.log("JS is working fine. No Problems here.");