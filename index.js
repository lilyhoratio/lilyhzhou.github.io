const lily = document.querySelector(".first-name");

const zhou = document.querySelector(".last-name");

const allLetters = document.querySelectorAll(".letter");

const firstNameLetters = document.querySelectorAll(".first-name .letter");

const lastNameLetters = document.querySelectorAll(".last-name .letter");

const z = document.querySelector(".last-name .z");
const o = document.querySelector(".last-name .o");
const tagline = document.querySelector(".tagline");

window.onload = function() {
  // Each letter pops up
  TweenMax.staggerFrom(
    allLetters,
    1,
    {
      ease: Elastic.easeOut,
      scale: 0.7
    },
    0.2
  );

  // Letter O rotate:
  TweenMax.to(o, 3.5, {
    // repeat: 1,
    rotation: "+=360",
    transformOrigin: "50% 50%",
    ease: Elastic.easeOut
  }).delay(1.3);

  TweenLite.to(z, 1, {
    rotation: 15,
    ease: Elastic.easeOut
  }).delay(1.4);
};

let countZHovers = 0;
z.addEventListener("mouseenter", () => {
  countZHovers += 1;
  console.log(countZHovers);
  TweenMax.to(z, 3, {
    rotation: "+=360",
    transformOrigin: "50% 50%",
    ease: Elastic.easeOut
  });

  if (countZHovers === 6) {
    tagline.textContent = "> weeee";
  }

  if (countZHovers === 10) {
    tagline.textContent = "> ok settle down, please read the rest thank u";
  }

  if (countZHovers === 25) {
    tagline.textContent = "> hire me lol ᕕ(◍ᗜ◎)ᕗ";
  }
});
