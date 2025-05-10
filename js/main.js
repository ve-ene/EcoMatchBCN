// Movimiento iconos
const iconosConfig = [
  {selector: ".iconos-1", duration: 1},
  {selector: ".iconos-2", duration: 1.35},
  {selector: ".iconos-3", duration: 0.75},
  {selector: ".iconos-4", duration: 1.2},
  {selector: ".iconos-5", duration: 1.5},
  {selector: ".iconos-6", duration: 0.80},
  {selector: ".iconos-7", duration: 1.4},
  {selector: ".iconos-8", duration: 1.65},
  {selector: ".iconos-9", duration: 0.85},

  {selector: ".green", duration: 1},
  {selector: ".gray", duration: 1.35},
  {selector: ".brown", duration: 0.75},
  {selector: ".yellow", duration: 1.2},
  {selector: ".blue", duration: 1.5},

  {selector: ".iconos-scroll", duration: 0.5}

];

iconosConfig.forEach(({ selector, duration }) => {
  gsap.to(selector, {
    y: "+=10",
    duration,
    ease: "sine.inOut",
    stagger: {
      amount: 1,
      from: "center",
      repeat: -1,
      yoyo: true,
    }
  });
});

//
//
//




// Scroll reveal
// gsap.to(".group-2", {
//   scrollTrigger: {
//     trigger: ".block",
//     start: "top 70%",
//     end: "bottom 30%",
//     scrub: true,
//   },
//   opacity: 1,
// });

// // ScrollReveal animations (todo dentro del DOMContentLoaded)
// document.addEventListener("DOMContentLoaded", function () {
//   // Animación para iconos-scroll y block-1
//   ScrollReveal().reveal('.iconos-scroll, .block-1', {
//     duration: 700,
//     origin: 'bottom',
//     distance: '50px',
//     opacity: 0,
//     easing: 'ease-in-out',
//     reset: true,
//   });

//   // Animación secuencial para cada imagen en .group-2
//   ScrollReveal().reveal('.group-2 img', {
//     duration: 700,
//     distance: '40px',
//     origin: 'bottom',
//     easing: 'ease-in-out',
//     interval: 100
//   });
// });




// Scroll Smoother
// gsap.config({
//   trialWarn: false,
// })


// gsap.registerPlugin(CustomEase, ScrollSmoother, ScrollTrigger)


// function map(x, a1, a2, b1, b2) {
//   return ((x - a1) * (b2 - b1)) / (a2 - a1) + b1
// }
// function clamp(v, min, max) {
//   return Math.min(max, Math.max(min, v))
// }
// function lerp(v1, v2, alpha) {
//   return v1 + (v2 - v1) * alpha
// }

// const scroller = ScrollSmoother.create({
//   smooth: 0.3,
//   effects: true,
//   ease: 'power2.inOut'
  
// });



  

