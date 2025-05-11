window.addEventListener("DOMContentLoaded", () => {
    const background = document.querySelector(".background");
    const content = document.querySelector(".content");

  
    const zoomed = localStorage.getItem("zoomed");
    // const origin = localStorage.getItem("zoomPosition");
  
    if (zoomed === "true" && origin) {
      background.style.transformOrigin = origin;
      content.style.transformOrigin = origin;
  
      // entrada suave
      background.classList.add("zoom-in");
      content.classList.add("zoom-in");      
    }
  
    localStorage.removeItem("zoomed");
    localStorage.removeItem("zoomPosition");

  });

// /* ACTIVATE VIEW TRANSITION API */
// function setupNavigation() {
//   const internalLinks = document.querySelectorAll('a');

//   internalLinks.forEach(link => {
//       link.addEventListener('click', async (event) => {
//           event.preventDefault();

//           document.startViewTransition(async () => {
//               const response = await fetch(link.href);
//               const html = await response.text();
//               const doc = new DOMParser().parseFromString(html, "text/html");
//               document.body.innerHTML = doc.body.innerHTML;
//               history.pushState(null, "", link.href);
//               setupNavigation();
//           });

          
//       })
//   })
// }

// setupNavigation();
  


// Buscador
document.querySelector('.search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        realizarBusqueda(); 
    }
});

function realizarBusqueda() {
    const query = document.querySelector('.search-input').value;
    if (query.trim()) {

        window.location.href = `busqueda.html?q=${encodeURIComponent(query)}`;
    }
}




//   document.addEventListener("DOMContentLoaded", function () {
//     const customInput = document.querySelector(".search-input");
  
//     customInput.addEventListener("keypress", function (e) {
//       if (e.key === "Enter") {
//         const query = customInput.value.trim();
//         if (query !== "") {
//           const form = document.querySelector("form.gsc-search-box");
//           const input = form.querySelector("input.gsc-input");
//           input.value = query;
//           form.submit();
//         }
//       }
//     });
//   });
