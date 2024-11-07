function removeTransparentBg() {
  const header = document.getElementById("header");
  header.classList.remove("transparent-bg");
}

function addTransparentBg() {
  const header = document.getElementById("header");
  header.classList.add("transparent-bg");
}

export { removeTransparentBg, addTransparentBg };
