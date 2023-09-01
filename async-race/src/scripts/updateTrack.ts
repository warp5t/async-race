import { pointUnit } from './selectRemoveListener'

const updateBtn = document.getElementById('updateBtn') as HTMLButtonElement;
const updateColor = document.getElementById('updateColor') as HTMLInputElement;
const updateName = document.getElementById('updateName') as HTMLInputElement;



updateBtn.addEventListener('click', () => {
  const nameCraft = document.getElementById(`UFO-${pointUnit}`) as HTMLDivElement;
  const colorCraft = document.getElementById(`svg-${pointUnit}`) as HTMLElement;
  nameCraft.innerText = updateName.value;
  colorCraft.setAttribute('fill', `${updateColor.value}`);
})
