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
  const prevButton = document.querySelector('.goToPrev');
  const nextButton = document.querySelector('.goToNext');

  function startSlider(){
    current = slider.querySelector('.current') || slides.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
   // console.log({current, prev, next});
  }
  startSlider();
} 

const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'))  