import {
  select_ID,
  remove_ID,
  updateCountUFO,
  reassigneCountUFO
} from './createTrack'
import {
  fixHeight
} from './fixHeight'
import {
  deleteShip,
  deleteWinner,
  shipSpliceNameManipulate
} from './serverRequest';

export let pointUnit = '0';
export let ammountPages_listener: number

export function setListenerSelect() {
  const selectBtn = document.getElementById(`${select_ID}`) as HTMLButtonElement;
  selectBtn.addEventListener('click', () => {
    const idBtn = selectBtn.id;
    pointUnit = idBtn.slice(7, idBtn.length);
  })

  const removeBtn = document.getElementById(`${remove_ID}`) as HTMLButtonElement;
  removeBtn.addEventListener('click', () => {
    const idBtn = removeBtn.id;
    pointUnit = idBtn.slice(7, idBtn.length);
    const trackNode = document.getElementById(`track-${pointUnit}`) as HTMLDivElement;
    console.log(pointUnit, typeof (pointUnit))
    trackNode.remove()
    console.log(Number(pointUnit) + 1)
    deleteShip(Number(pointUnit));
    deleteWinner(Number(pointUnit));
    const subwrapField = document.querySelector('.subwrap-field-race') as HTMLDivElement;
    ammountPages_listener = Math.trunc(subwrapField.children.length / 7);
    reassigneCountUFO()
    updateCountUFO()
    fixHeight()
    shipSpliceNameManipulate('', Number(pointUnit))
  })
}