import {nameID, svg_ID} from './createTrack'
import { pointUnit } from './setListener'

const updateBtn = document.getElementById('updateBtn') as HTMLButtonElement;
const updateColor = document.getElementById('updateColor') as HTMLInputElement;
const updateName = document.getElementById('updateName') as HTMLInputElement;



updateBtn.addEventListener('click', () => {
  const nameCraft = document.getElementById(`UFO-${pointUnit}`) as HTMLDivElement;
  const colorCraft = document.getElementById(`svg-${pointUnit}`) as HTMLElement;
  console.log(nameID, svg_ID)
  console.log(pointUnit, 'pointUnit')
  console.log(updateColor.value)
  console.log(updateName.value)
  nameCraft.innerText = updateName.value;
  colorCraft.setAttribute('fill', `${updateColor.value}`);
})
