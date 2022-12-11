// Import stylesheets
import './style.css'
import './style.scss'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Custom Javascript Slider</h1>`;

function Slider(slider){
  if(!(slider instanceof Element)) {
    throw new Error('No Slider avail');
  }
  // create variables for working with the slider 
  //variable will help keep track of the sliders position - whats current, next or prev
  let current;
  let prev;
  let next;
  
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider(){
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
   // console.log({current, prev, next});
  }
  function applyClasses(){
    current.classList.add('current');
    prev.classList.add('prev');
    next.classList.add('next');
  }
  function move(direction){
     //remove classes from current
     const classesToRemove = ['prev','current','next'];
     prev.classList.remove(...classesToRemove);
     current.classList.remove(...classesToRemove);
     next.classList.remove(...classesToRemove); 
     if(direction === 'back') {
       // a new array to destructure old values into new variables 
        [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
     } else {
      [prev, current, next] = [current, next, next.nextElementSibling || slides.firstChild,];
     }
     applyClasses();
  }
  startSlider();
  applyClasses();
  // listeners for clicks - 
  prevButton.addEventListener('click', () => move('back'));
  nextButton.addEventListener('click', move);
} 

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'))  