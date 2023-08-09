import {
  maxHeightField
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

function enumPermiss() {
  console.log('ammountPages - ', ammountPages, 'countPages - ', countPages)
  if (ammountPages === countPages) {
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
  console.log('lastPage - ', lastPage)
}

window.addEventListener('DOMContentLoaded', enumPermiss)

nextBtn.addEventListener('click', () => {
  countPages++
  numberPage++
  enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
})

prevBtn.addEventListener('click', () => {
  countPages--
  numberPage--
  enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
})

const observer = new MutationObserver(enumPermiss);

const config = {
  attributes: true,
  childList: true,
  subtree: true
};

observer.observe(subwrapFieldRace, config)