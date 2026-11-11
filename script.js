
/* =====================================
   GOKUL.EXE — ULTIMATE INTERACTIONS
===================================== */


/* 1. CINEMATIC LOADING SCREEN */

const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loader-progress");
const loaderNumber = document.getElementById("loader-number");

let progress = 0;

const loading = setInterval(() => {

    progress += Math.floor(Math.random() * 8) + 2;

    if (progress >= 100) {
        progress = 100;
        clearInterval(loading);
    }

    loaderProgress.style.width = progress + "%";
    loaderNumber.textContent = progress + "%";

    if (progress === 100) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 500);
    }

}, 90);


/* 2. TYPING ANIMATION */

const typingText = document.getElementById("typing-text");

const roles = [
    "FULL STACK DEVELOPER",
    "PYTHON DEVELOPER",
    "WEB DESIGNER",
    "CREATIVE DEVELOPER"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeAnimation, 1300);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeAnimation, deleting ? 45 : 85);
}

typeAnimation();


/* 3. SPEEDOMETER ANIMATION */

const speedNumber = document.getElementById("speed-number");

let speed = 0;

const speedTimer = setInterval(() => {

    speed += 2;

    if (speed >= 100) {
        speed = 100;
        clearInterval(speedTimer);
    }

    speedNumber.textContent = speed;

}, 30);


/* 4. SCROLL REVEAL ANIMATION */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* 5. MOUSE FOLLOWING RED GLOW */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

    window.addEventListener("pointermove", (event) => {

        cursorGlow.style.left = event.clientX + "px";
        cursorGlow.style.top = event.clientY + "px";

    });

}


/* 6. 3D PROJECT CARD EFFECT */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("pointermove", (event) => {

        if (event.pointerType === "touch") return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

    });

    card.addEventListener("pointerleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});


/* 7. CURRENT YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* 8. CONSOLE WELCOME */

console.log("%c GOKUL.EXE SYSTEM ONLINE ",
    "background:#ff1717;color:white;font-size:18px;font-weight:bold;padding:10px;"
);

console.log("Welcome to the developer universe.");
