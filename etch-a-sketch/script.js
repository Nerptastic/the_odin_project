let n = 32;
let gridContainer = document.getElementById('gridContainer');
let fragment = document.createDocumentFragment();
let div;

window.onload = function createGrid() {
  
  for (let i = 0; i < n; i++) { 
      for (let j = 0; j < n; j++) { 
          div = document.createElement('div');
          div.className = ('single');
          fragment.appendChild(div);
      }
  }
  
  gridContainer.appendChild(fragment);
};
