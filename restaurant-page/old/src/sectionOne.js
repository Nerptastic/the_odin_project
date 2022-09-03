export default function sectionOne() {
  const sectionOne = document.createElement('section');
  sectionOne.setAttribute('id', 'sectionOne');
  sectionOne.classList.add('hidden-section');
  const sectionOneContent = 
  `
  <h2>TYCO'S FAVES.</h2>
  <p>Get busy with Tyco certified favorites. </p>
  <div class="cards">
    <div class="card">
      <div class="square1"></div>
      <p> Tyco's Chicken</p>
    </div>
    <div class="card">
      <div class="square2"></div>
      <p> Big Tyco Spinach</p>
    </div>
    <div class="card">
      <div class="square3"></div>
      <p> Tyco Grab Bag of Burgers</p>
    </div>
    <div class="card">
      <div class="square4"></div>
      <p> Tyco's 'Zagna</p>
    </div>
  </div>
  `;
  sectionOne.innerHTML = sectionOneContent;
  console.log('Section One Loaded');
  return sectionOne;
}