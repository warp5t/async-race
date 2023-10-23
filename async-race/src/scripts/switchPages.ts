import {
  maxHeightField,
  fixHeight
} from './fixHeight'
import {
  ammountPages,
  remainUFO,
  subwrapFieldRace
} from './createTrack'


export const nextBtn = document.querySelector('.page-btn__next') as HTMLButtonElement;
const prevBtn = document.querySelector('.page-btn__previous') as HTMLButtonElement;
export let countPages = 0, lastPage = false;


function updateCountPages() {
  const page = document.getElementById('page') as HTMLHeadElement;
  page.innerText = `page #${countPages + 1}`;
}

export function enumPermiss() {
  if (ammountPages === countPages && remainUFO === 0) {
    lastPage = true;
  } else if (ammountPages === countPages && remainUFO > 0) {
    lastPage = true;
    nextBtn.disabled = true;
  } else if (ammountPages > countPages && remainUFO === 0) {
    if (ammountPages - countPages === 1) {
      lastPage = true;
      nextBtn.disabled = true;
    } else {
      lastPage = false;
      nextBtn.disabled = false;
    }
  } else if (ammountPages > countPages && remainUFO > 0) {
    lastPage = false;
    nextBtn.disabled = false;
  }
  if (countPages === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
}
enumPermiss()

export function switchPages_s() { 

window.addEventListener('DOMContentLoaded', enumPermiss)

nextBtn.addEventListener('click', () => {
  countPages++
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})

prevBtn.addEventListener('click', () => {
  countPages--
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})
}
switchPages_s()
// const observer = new MutationObserver(enumPermiss);

// const config = {
//   attributes: true,
//   childList: true,
//   subtree: true
// };

// observer.observe(subwrapFieldRace, config)