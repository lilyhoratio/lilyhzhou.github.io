const lily = document.querySelector(".first-name");

const zhou = document.querySelector(".last-name");

const allLetters = document.querySelectorAll(".letter");

const firstNameLetters = document.querySelectorAll(".first-name .letter");

const lastNameLetters = document.querySelectorAll(".last-name .letter");

const z = document.querySelector(".last-name .z");
const o = document.querySelector(".last-name .o");

TweenMax.staggerFrom(
  allLetters,
  1,
  {
    ease: Elastic.easeOut,
    scale: 0.5
  },
  0.2
);

// // Rotates all zhou letters
// TweenMax.staggerTo(
//   lastNameLetters,
//   2,
//   {
//     rotation: 10,
//     ease: Elastic.easeOut
//   },
//   0.1
// );

// TweenMax.from(z, 2, {
//   ease: Bounce.easeOut,
//   scale: 0
// });

// // letter o rotates
TweenMax.to(o, 3.5, {
  // repeat: 1,
  rotation: "+=360",
  transformOrigin: "50% 50%",
  ease: Elastic.easeOut
}).delay(1.3);

TweenLite.to(z, 1, {
  rotation: 15,
  ease: Elastic.easeOut
}).delay(1.3);

z.addEventListener("mouseenter", () => {
  TweenMax.to(z, 3, {
    rotation: "+=360",
    transformOrigin: "50% 50%",
    ease: Elastic.easeOut
  });
});
