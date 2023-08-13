export let pointUnit = '0';
import {select_ID} from './createTrack'

export function setListenerSelect() {
  console.log('setListenerSelect')
  console.log(select_ID)
  const selectBtn = document.getElementById(`${select_ID}`) as HTMLButtonElement;
  selectBtn.addEventListener('click',() => {
    const idBtn = selectBtn.id;
    pointUnit = idBtn.slice(7, idBtn.length);
    console.log(pointUnit, ' - pointUnit')
  })
}

// const select_0 = document.getElementById('SELECT-1') as HTMLButtonElement;

// setListenerSelect(select_0);
