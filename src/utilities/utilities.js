import { toast } from "react-toastify";

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
const notify = (message, variant = "info") => {
  toast(message, {
    autoClose: 3000,
    position: "bottom-right",
    hideProgressBar: true,
    closeButton: false,
    type: variant,
  });
};

export { removeTransparentBg, addTransparentBg, headerScroll, notify };
