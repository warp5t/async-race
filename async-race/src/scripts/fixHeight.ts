import {countUFO} from './createTrack'
import {fieldRace} from './createTrack'
let containerTrackHeight: number;

export function fixHeight() {

  if(countUFO >= 7) {
    const contaierTrack = document.querySelector('.container-track') as HTMLDivElement;
    containerTrackHeight = contaierTrack.offsetHeight;
    fieldRace.style.height = (containerTrackHeight * 7) + 'px';
  }
  console.log(countUFO)
}