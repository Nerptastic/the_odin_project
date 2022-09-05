import './style.css';
import app from './app.js';

export default function displayApp() {
  const container = document.getElementById('container');
  container.appendChild(app());
}

displayApp();