export let pointUnit = '0';
import {select_ID,remove_ID} from './createTrack'
import { fixHeight } from './fixHeight'
import { updateCountUFO } from './createTrack';
// import { currentPage } from './switchPages';
import { countUFO } from './createTrack';

export let ammountPages_listener: number

export function setListenerSelect() {
  console.log('setListenerSelect')
  const selectBtn = document.getElementById(`${select_ID}`) as HTMLButtonElement;
  selectBtn.addEventListener('click',() => {
    const idBtn = selectBtn.id;
    pointUnit = idBtn.slice(7, idBtn.length);
    console.log(pointUnit, ' - pointUnit')
  })

  const removeBtn = document.getElementById(`${remove_ID}`) as HTMLButtonElement;
  removeBtn.addEventListener('click', () => {
    const idBtn = selectBtn.id;
    console.log(idBtn, ' - idBtn')
    pointUnit = idBtn.slice(7, idBtn.length);
    const trackNode = document.getElementById(`track-${pointUnit}`) as HTMLDivElement;
    trackNode.remove()
    ammountPages_listener = Math.trunc(countUFO / 7);
    updateCountUFO()
    fixHeight()
  })
}

// const select_0 = document.getElementById('SELECT-1') as HTMLButtonElement;

// setListenerSelect(select_0);
