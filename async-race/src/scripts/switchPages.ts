import {
  maxHeightField,
  fixHeight
} from './fixHeight'
import {
  ammountPages,
  // countUFO,
  remainUFO,
  subwrapFieldRace
} from './createTrack'


const nextBtn = document.querySelector('.page-btn__next') as HTMLButtonElement;
const prevBtn = document.querySelector('.page-btn__previous') as HTMLButtonElement;
let numberPage = 0;
export let countPages = 0, lastPage = false;


function updateCountPages() {
  const page = document.getElementById('page') as HTMLHeadElement;
  page.innerText = `page #${numberPage + 1}`;
}

export function enumPermiss() {
  if(ammountPages === countPages) {
    nextBtn.disabled = true;
    lastPage = true;
  } else {
    nextBtn.disabled = false;
    lastPage = false;
  }
  if(ammountPages > 0 && remainUFO === 0) {
    nextBtn.disabled = true;
  }
  if(numberPage + 1 !== ammountPages) {
    nextBtn.disabled = false;
  }
  if(countPages === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
}

window.addEventListener('DOMContentLoaded', enumPermiss)

nextBtn.addEventListener('click', () => {
  countPages++
  numberPage++
  // enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})

prevBtn.addEventListener('click', () => {
  countPages--
  numberPage--
  // enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})

const observer = new MutationObserver(enumPermiss);

const config = {
  attributes: true,
  childList: true,
  subtree: true
};

observer.observe(subwrapFieldRace, config)