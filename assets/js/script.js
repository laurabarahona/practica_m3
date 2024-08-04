document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const sectionOne = document.querySelector(".section--one");
    const sectionTwo = document.querySelector(".section--two");
    let showingSectionOne = true;

    toggleButton.addEventListener("click", function() {
        if (showingSectionOne) {
            sectionOne.classList.remove("visible");
            sectionTwo.classList.add("visible");
            toggleButton.textContent = "Ver conversaciones";
        } else {
            sectionOne.classList.add("visible");
            sectionTwo.classList.remove("visible");
            toggleButton.textContent = "Ver chat";
        }
        showingSectionOne = !showingSectionOne;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const notification = document.getElementById("notification");

    notification.addEventListener("click", function() {
        this.style.display = "none";
    });
});