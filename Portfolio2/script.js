const dropdownbtns = document.querySelectorAll(".dropdown-btn");

dropdownbtns.forEach(button => {
    button.addEventListener("click", function(e) {

        const dropdown = this.nextElementSibling;

        dropdown.classList.toggle("change");

        document.querySelectorAll(".dropdown").forEach(nextdropdown => {
            if (nextdropdown !== dropdown) {
                nextdropdown.classList.remove("change");
            }
        });
    });
});

window.addEventListener("click", function(e) {
    if (!e.target.matches(".dropdown-btn")) {
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.classList.remove("change");
        });
    }
});