export default function content(sectionID) {
    document.getElementById('section').innerHTML = document.getElementById(sectionID).innerHTML;
  return sectionID;
}