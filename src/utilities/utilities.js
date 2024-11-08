function removeTransparentBg() {
  const header = document.getElementById("header");
  header.classList.remove("transparent-bg");
}

function addTransparentBg() {
  const header = document.getElementById("header");
  header.classList.add("transparent-bg");
}
function headerScroll() {
  const header = document.getElementById("header");
  if (header) {
    header.classList.toggle("transparent-bg", window.scrollY < 100);
  }
}

export { removeTransparentBg, addTransparentBg, headerScroll };
