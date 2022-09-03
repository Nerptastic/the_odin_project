export default function footer() {
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');
  footer.textContent = "Copyright © Tyco Goon Scrap Restaurant";
  console.log("Footer Loaded")
  return footer;
}