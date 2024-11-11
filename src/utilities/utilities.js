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
    autoClose: 2000,
    position: "top-right",
    hideProgressBar: true,
    closeButton: false,
    type: variant,
    stacked: true,
    limit: 3,
  });
};

export { removeTransparentBg, addTransparentBg, headerScroll, notify };
