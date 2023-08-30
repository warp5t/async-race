import {countUFO} from './createTrack'
import {lastPage, enumPermiss} from './switchPages';

let containerTrackHeight: number;
const fieldRace = document.querySelector('.field-race') as HTMLDivElement;
export let maxHeightField: number;

export function fixHeight() {
  const contaierTrack = document.querySelector('.container-track') as HTMLDivElement;
  enumPermiss()
  containerTrackHeight = contaierTrack.offsetHeight;
  if(countUFO >= 7 && lastPage === false) {
    maxHeightField = containerTrackHeight * 7;
    fieldRace.style.height = maxHeightField + 'px';
  } else if (countUFO <= 7 && lastPage === true) {
    fieldRace.style.height = (containerTrackHeight * countUFO) + 'px';
  } else if(countUFO > 7 && lastPage === true) {
    const ammountItems = countUFO % 7;
    let height:number;
    if(ammountItems === 0) {
      height = containerTrackHeight * 7;
    } else {
      height = containerTrackHeight * ammountItems;
    }
    fieldRace.style.height = height + 'px';
  }
}

document.addEventListener('DOMContentLoaded',fixHeight)