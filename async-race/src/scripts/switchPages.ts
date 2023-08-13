import {
  maxHeightField,
  fixHeight
} from './fixHeight'
import {
  ammountPages,
  subwrapFieldRace
} from './createTrack'

const nextBtn = document.querySelector('.page-btn__next') as HTMLButtonElement;
const prevBtn = document.querySelector('.page-btn__previous') as HTMLButtonElement;
let countPages = 0, numberPage = 1;
export let lastPage = false;


function updateCountPages() {
  const page = document.getElementById('page') as HTMLHeadElement;
  page.innerText = `page #${numberPage}`;
}

export function enumPermiss() {
  if(ammountPages === countPages) {
    nextBtn.disabled = true;
    lastPage = true;
  } else {
    nextBtn.disabled = false;
    lastPage = false;
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
  enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})

prevBtn.addEventListener('click', () => {
  countPages--
  numberPage--
  enumPermiss()
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