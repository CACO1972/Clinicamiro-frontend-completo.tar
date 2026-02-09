const ctaButtons = document.querySelectorAll(".primary");

ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contacto = document.querySelector("#contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  });
});
