export default function header() {
  const header = document.createElement('header');
  const headerContent = 
  `<div class="navigation">
    <h1>T-DOT GOON SCRAP RESTAURANT</h1>
  <ul>
    <li><a href="../../index.html">Back to Dev</a></li>
  </ul>
  </div>
  <div class="header-section">
    <div class="header-text-section">
      <h2>This here's Tyco's Restaurant Page</h2>
      <p> This is the bare loot restaurant. <br>Check the script and flip the switch.</p>
    <div class="buttons">
      <button class="button" id="btn1"> TYCO'S FAVES</button>
      <button class="button" id="btn2"> TYCO HAS REP</button>
      <button class="button" id="btn3"> RING TYCO</button>
    </div>
  </div>
    <div id="image"></div>
  </div>`;

  header.innerHTML = headerContent;
  console.log('Header Loaded');
  return header;
}