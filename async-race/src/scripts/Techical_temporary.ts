// import { fixHeight } from "./fixHeight";
// import { countUFO } from "./createTrack";
// import { lastPage } from "./switchPages";
// import { ammountPages } from "./createTrack";
// import { countPages } from "./switchPages";
// import { remainUFO } from "./createTrack";

import { updateSheep, getSheeps, getSheep, createSheep, deleteSheep, stpStrtDriveEngine, getWinners } from "./serverRequest";

const wrap = document.querySelector('.wrap') as HTMLDivElement;
const  techicalBtn = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_0 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_1 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_2 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_3 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_4 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_5 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_6 = document.createElement('button') as HTMLButtonElement;
const arrTechBtn = [techicalBtn, techicalBtn_0, techicalBtn_1, techicalBtn_2, techicalBtn_3, techicalBtn_4, techicalBtn_5, techicalBtn_6]
arrTechBtn.forEach(element => {
  element.style.height = '70px';
  element.style.width = '70px';
  wrap.append(element);
});
let switcher = true;
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
techicalBtn_4.addEventListener('click', () => {
  if(!switcher) {
    stpStrtDriveEngine(3,'started')
    switcher = true;
  } else {
    stpStrtDriveEngine(3,'stopped')
    switcher = false;
  }
})
techicalBtn_5.addEventListener('click', () => {
  if(switcher) stpStrtDriveEngine(3, 'drive');
})
techicalBtn_6.addEventListener('click', () => {
  getWinners()
})