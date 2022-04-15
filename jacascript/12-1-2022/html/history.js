const input = document.querySelector(".theme-switcher input");

input.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }

});


