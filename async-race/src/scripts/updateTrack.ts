const updateBtn = document.getElementById('updateBtn') as HTMLButtonElement;
const updateColor = document.getElementById('updateColor') as HTMLInputElement;
const updateName = document.getElementById('updateName') as HTMLInputElement;

import {unitID} from './common'


updateBtn.addEventListener('click', () => {
  // console.log(el.type)
  console.log(updateColor.value)
  console.log(updateName.value)
  unitID.setAttribute('fill', `${updateColor.value}`);
})
