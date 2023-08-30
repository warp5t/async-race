// import { fixHeight } from "./fixHeight";
// import { countUFO } from "./createTrack";
// import { lastPage } from "./switchPages";
// import { ammountPages } from "./createTrack";
// import { countPages } from "./switchPages";
// import { remainUFO } from "./createTrack";

import { updateSheep, getSheeps, getSheep, createSheep, deleteSheep } from "./serverRequest";

const wrap = document.querySelector('.wrap') as HTMLDivElement;
const  techicalBtn = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_0 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_1 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_2 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_3 = document.createElement('button') as HTMLButtonElement;
const arrTechBtn = [techicalBtn, techicalBtn_0, techicalBtn_1, techicalBtn_2, techicalBtn_3]
arrTechBtn.forEach(element => {
  element.style.height = '70px';
  element.style.width = '70px';
  wrap.append(element);
});

techicalBtn.addEventListener('click', () =>{
  getSheeps()
})

techicalBtn_0.addEventListener('click', () => {
  getSheep(1)
})
techicalBtn_1.addEventListener('click', () => {
  updateSheep(1,'Rusted Tank', '#ff00ff')
})
techicalBtn_2.addEventListener('click', () => {
  createSheep('Super Furter', '#ff00ff')
})
techicalBtn_3.addEventListener('click', () => {
  deleteSheep(6)
})