import {subwrapFieldRace} from './createTrack'
import {maxHeightField} from './fixHeight'
import {countUFO} from './createTrack'
const nextBtn = document.querySelector('.page-btn__next') as HTMLButtonElement;
const prevBtn = document.querySelector('.page-btn__previous') as HTMLButtonElement;
let countPage = 0;

function updateCountPages() {
  const page = document.getElementById('page') as HTMLHeadElement;
  page.innerText = `page #${countPage + 1}`;
}

function enumPermiss() {
  const remain = Math.trunc(countUFO / 8);
  console.log(remain, ' - remain')
  console.log(countPage, ' - countPage')
  if(countPage === remain) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
  if(countPage === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
}

window.addEventListener('DOMContentLoaded', enumPermiss)

nextBtn.addEventListener('click', () => {
  enumPermiss()
    countPage++
    subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPage) + 'px';
    updateCountPages()
})

prevBtn.addEventListener('click', () => {
  enumPermiss()
  countPage--
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPage) + 'px';
  updateCountPages()
})

const observer = new MutationObserver(enumPermiss);

const config = { attributes: true, childList: true, subtree: true };

observer.observe(subwrapFieldRace,config)