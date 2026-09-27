const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const finalScreen = document.getElementById("finalScreen");

let noClicks = 0;

const noMessages = [
    "Are you sure?",
    "Really? 🥺",
    "Think again...",
    "Please? 💗",
    "You might regret this!",
    "Last chance!",
    "The YES button is getting bigger 😳",
    "There's only one choice now... 💗"
];

const positions = [
    { left: "80%", top: "35%" },
    { left: "80%", top: "65%" },
    { left: "70%", top: "80%" },
    { left: "25%", top: "80%" },
    { left: "18%", top: "60%" },
    { left: "18%", top: "35%" },
    { left: "80%", top: "20%" }
];

noBtn.addEventListener("click", function () {

    noClicks++;

    message.textContent =
        noMessages[Math.min(noClicks, noMessages.length - 1)];

    // Move NO button away.
    noBtn.classList.add("moving");

    const position =
        positions[(noClicks - 1) % positions.length];

    noBtn.style.left = position.left;
    noBtn.style.top = position.top;

    // Make YES bigger.
    const scale = Math.min(1 + noClicks * 0.42, 4.5);

    yesBtn.style.transform = "scale(" + scale + ")";

    // After 7 NO clicks, YES fills the screen.
    if (noClicks >= 7) {

        // Remove old scale before full screen.
        yesBtn.style.transform = "";

        yesBtn.classList.add("growing");

        noBtn.style.opacity = "0";
        noBtn.style.pointerEvents = "none";
    }
});

yesBtn.addEventListener("click", function () {

    // Show the anniversary screen.
    finalScreen.classList.add("show");

});
