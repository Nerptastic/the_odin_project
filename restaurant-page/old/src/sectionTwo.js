export default function sectionTwo() {
  const sectionTwo = document.createElement('section');
  sectionTwo.setAttribute('id', 'sectionTwo');
  sectionTwo.classList.add('hidden-section');
  const sectionTwoContent = 
  `
  <h2>TYCO'S REP IS IMMACULATE</h2>
  <p>"Tyco whips up the best of the best in the kitchen. He's a master of the blade, choppin the greens up, and
  sizzlin' new tastes every day."
  </p>
  <p class="title">- Squid Man</p>
  `;
  sectionTwo.innerHTML = sectionTwoContent;
  console.log('Section Two Loaded');
  return sectionTwo;
}