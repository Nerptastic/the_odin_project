export default function sectionThree() {
  const sectionThree = document.createElement('section');
  sectionThree.setAttribute('id', 'sectionThree');
  sectionThree.classList.add('hidden-section');
  const sectionThreeContent = 
  `
  <h2>GET IN TOUCH WITH TYCO</h2>
  <div class="CTA">
      <div class="CTA-left">
        <h3>Call Tyco.</h3>
        <p>Tyco will link up and educate.</p>
      </div>
      <div class="CTA-right">
        <button class="button" onClick="alert('TYCO HAS NO PHONE, YOU BEAN')">Hit the Tyco Line</button>
      </div>

  </div>
  `;
  sectionThree.innerHTML = sectionThreeContent;
  console.log('Section Three Loaded');
  return sectionThree;
}