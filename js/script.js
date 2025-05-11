
window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("[class^='section-']");
    const background = document.querySelector(".background");
    const content = document.querySelector(".content");

       
    sections.forEach((section) => {
        section.addEventListener("click", (event) => {
        event.preventDefault(); 
  
        const clickX = event.clientX;
        const clickY = event.clientY;
  

        const xPercent = (clickX / window.innerWidth) * 100;
        const yPercent = (clickY / window.innerHeight) * 100;
  

        background.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        content.style.transformOrigin = `${xPercent}% ${yPercent}%`;

  
        // animación
        background.classList.add("zoom");
        content.classList.add("zoom-out");

        
  
        // guarda el link clickeado
        const link = section.querySelector("a");
        const href = link ? link.getAttribute("href") : null;
  
        // nuevo fondo con zoom
        localStorage.setItem("zoomPosition", background.style.transformOrigin);
        localStorage.setItem("zoomed", "true");
             

        // desp de 1s va a buscador.html
        if (href) {
          setTimeout(() => {
            window.location.href = href;
          }, 1200);
        }


      });
    });
  });



  
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  // Scroll Suave
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5, 
    effects: true 
  });
  
  gsap.from(".iconos-8", {
    scrollTrigger: {
      trigger: ".iconos-8",
      start: "20px 80%",
      end: "top 10%",
      toggleActions: "play pause reverse none",
      scrub: true
    },
    y: 100,
    opacity: 0
  });
  
  gsap.from(".iconos-7", {
    scrollTrigger: {
      trigger: ".iconos-7",
      start: "top center",
      end: "top 10%",
      toggleActions: "play pause reverse none",
      scrub: true 
    },
    y: 100,
    opacity: 0
  });
  
  
  gsap.from(".iconos-9", {
    scrollTrigger: {
      trigger: ".iconos-9",
      start: "top center",
      end: "top 10%",
      toggleActions: "play pause reverse none",
      scrub: true
    },
    y: 100,
    opacity: 0
  });
  
  
  //
  
  gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
      opacity: 0,
  
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  //mapa
  gsap.from(".punto-verde", {
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.7)"
});

// tooltip para puntos verdes

const puntosVerde = document.querySelectorAll('.punto-verde');

puntosVerde.forEach(function(punto) {
  punto.addEventListener('click', function() {
    const info = punto.dataset.info;  // Obtén el valor del data-info

    showInfo(info);  // Pasa el valor al método showInfo
  });
});

function showInfo(info) {
  const tooltip = document.querySelector('#tooltip');  // Selecciona el tooltip
  tooltip.textContent = info;  // Asigna el contenido del data-info al tooltip
  tooltip.style.display = "block";  // Asegúrate de que el tooltip esté visible
}

// const tooltip = document.querySelector('#tooltip');

// document.querySelectorAll(".punto-verde").forEach(punto => {
//     punto.addEventListener("mouseenter", e => {
//         tooltip.style.display = "block";
//         tooltip.textContent = punto.dataset.info;
//     });
//     punto.addEventListener("mouseleave", () => {
//         tooltip.style.display = "none";
//     });
//     punto.addEventListener("mousemove", e => {
//         tooltip.style.left = e.pageX + 10 + "px";
//         tooltip.style.top = e.pageY - 20 + "px";
//     });
// });