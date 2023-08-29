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
// export let currentPage = 0;
export let countPages = 0, lastPage = false;


function updateCountPages() {
  const page = document.getElementById('page') as HTMLHeadElement;
  page.innerText = `page #${countPages + 1}`;
}

export function enumPermiss() {
  console.log(countUFO / 7, ' : countUFO / 7')
  // if(ammountPages === countPages) {
  //   nextBtn.disabled = true;
  //   lastPage = true;
  //   console.log('term 28  switchPages -------------------------------\n')
  // } else {
  //   nextBtn.disabled = false;
  //   lastPage = false;
  //   console.log('term 32  switchPages -------------------------------\n')
  // }
  // if(ammountPages > 0) {
  //   if(ammountPages === countPages + 1) {
  //     nextBtn.disabled = true;
  //     lastPage = true;
  //     console.log('term 28_0  switchPages -------------------------------\n')
  //   }
  // }
  // if(ammountPages > 0 && remainUFO === 0) {
  //   nextBtn.disabled = true;
  //   console.log('term 37  switchPages -------------------------------\n')
  // }
  // if(countPages + 1 < ammountPages) {
  //   nextBtn.disabled = false;
  //   console.log('term 40  switchPages -------------------------------\n')
  // }
  // if(countPages + 1 === ammountPages && countPages + 1 !== 1 && remainUFO === 0) {
  //   nextBtn.disabled = true;
  //   lastPage = true;
  //   console.log('term 46 switchPages -------------------------------\n')
  // }
  // if(countUFO <= 7) {
  //   nextBtn.disabled = true;
  //   lastPage = true;
  //   console.log('term 49 switchPages -------------------------------\n')
  // }
  // if(countPages === 0) {
  //   prevBtn.disabled = true;
  //   console.log('term 52 switchPages -------------------------------\n')
  // } else {
  //   prevBtn.disabled = false;
  //   console.log('term 55 switchPages -------------------------------\n')
  // }

  if(ammountPages === countPages && remainUFO === 0) {
    lastPage = true;
    console.log('term 70 switchPages')
  } else if(ammountPages === countPages && remainUFO > 0) {
    lastPage = true;
    nextBtn.disabled = true;
    console.log('term 73 switchPages')
  } else if(ammountPages > countPages && remainUFO === 0) {
    lastPage = false;
    nextBtn.disabled = true;
    console.log('term 75 switchPages')
  } else if(ammountPages < countPages && remainUFO === 0) {
    console.log('term 77 switchPages')
  } else if(ammountPages > countPages && remainUFO > 0) {
    lastPage = false;
    nextBtn.disabled = false;
    console.log('term 79 switchPages')
  } else if(ammountPages < countPages && remainUFO > 0) {
    console.log('term 81 switchPages')
  }
  if(countPages === 0) {
    prevBtn.disabled = true;
    console.log('term 90 switchPages')
    } else {
      prevBtn.disabled = false;
      console.log('term 93 switchPages')
    }
  }
enumPermiss()


window.addEventListener('DOMContentLoaded', enumPermiss)

nextBtn.addEventListener('click', () => {
  countPages++
  // currentPage++
  // enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})

prevBtn.addEventListener('click', () => {
  countPages--
  // currentPage--
  // enumPermiss()
  subwrapFieldRace.style.bottom = ((-1) * maxHeightField * countPages) + 'px';
  updateCountPages()
  fixHeight()
})

// const observer = new MutationObserver(enumPermiss);

// const config = {
//   attributes: true,
//   childList: true,
//   subtree: true
// };

// observer.observe(subwrapFieldRace, config)