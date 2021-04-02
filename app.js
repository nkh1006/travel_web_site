const hikeExp = document.querySelector('.hike-exp');
const slide = document.querySelector('.slide');

/*
window.addEventListener('scroll', scrollReveal);

function scrollReveal() {
   const hikePos = hikeExp.getBoundingClientRect().top;
   const windowHeight = window.innerHeight / 1.8;
   if(hikePos < windowHeight) {
      hikeExp.style.color = 'red';
   }
}
*/

let options = {
   threshold: 0.5
}
let observer = new IntersectionObserver(slideAnim, options);

function slideAnim(entries) {
   entries.forEach(entry => {
      if(entry.isIntersecting) {
         
      }
   });
}

observer.observe(slide);
observer.observe(button);
observer.observe(slide);