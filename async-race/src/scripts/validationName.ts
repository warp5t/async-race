import {spliceName} from './randomize'
import { createName,createBtn } from './createTrack'

export let permissName = true;

export function nameValidation(name:string) {
  permissName = spliceName.includes(name);
  if(permissName) {
    createName.placeholder = 'This name already exists';
    createBtn.disabled = true;
  } else {
    createBtn.disabled = false;
    spliceName.push(name)
  }
}

createName.addEventListener("focus", () => {
  nameValidation(createName.value)
})

createName.addEventListener("input", () => {
  nameValidation(createName.value)
})
