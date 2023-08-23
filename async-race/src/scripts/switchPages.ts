import {
  maxHeightField,
  fixHeight
} from './fixHeight'
import {
  ammountPages,
  countUFO,
  remainUFO,
  subwrapFieldRace
} from './createTrack'


export const nextBtn = document.querySelector('.page-btn__next') as HTMLButtonElement;
const prevBtn = document.querySelector('.page-btn__previous') as HTMLButtonElement;
export let currentPage = 0;
export let countPages = 0, lastPage = false;


function updateCountPages() {
  const page = document.getElementById('page') as HTMLHeadElement;
  page.innerText = `page #${currentPage + 1}`;
}

export function enumPermiss() {
  if(ammountPages === countPages) {
    nextBtn.disabled = true;
    lastPage = true;
    console.log('term 28')
  } else {
    nextBtn.disabled = false;
    lastPage = false;
    console.log('term 32')
  }
  if(ammountPages > 0 && remainUFO === 0) {
    nextBtn.disabled = true;
  }
  if(currentPage + 1 < ammountPages) {
    nextBtn.disabled = false;
  }
  if(currentPage + 1 === ammountPages && currentPage + 1 !== 1 && remainUFO === 0) {
    nextBtn.disabled = true;
    lastPage = true;
    console.log('\n-------------------------- term 41 switchPages -------------------------------\n')
  }
  //  else {
  //   lastPage = false;
  //   console.log('term 46')
  // }
  if(countUFO <= 7) {
    nextBtn.disabled = true;
    lastPage = true;
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
  currentPage++
  // enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})

prevBtn.addEventListener('click', () => {
  countPages--
  currentPage--
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