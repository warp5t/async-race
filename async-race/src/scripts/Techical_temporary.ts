// import { fixHeight } from "./fixHeight";
// import { countUFO } from "./createTrack";
// import { lastPage } from "./switchPages";
// import { ammountPages } from "./createTrack";
// import { countPages } from "./switchPages";
// import { remainUFO } from "./createTrack";

import { updateSheep, getSheeps, getSheep, createSheep, deleteSheep, stpStrtDriveEngine,
getWinners, getWinner, createWinner, deleteWinner, updateWinner } from "./serverRequest";

const wrap = document.querySelector('.wrap') as HTMLDivElement;
const  techicalBtn = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_0 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_1 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_2 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_3 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_4 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_5 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_6 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_7 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_8 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_9 = document.createElement('button') as HTMLButtonElement;
const  techicalBtn_10 = document.createElement('button') as HTMLButtonElement;
const arrTechBtn = [techicalBtn, techicalBtn_0, techicalBtn_1, techicalBtn_2,
techicalBtn_3, techicalBtn_4, techicalBtn_5, techicalBtn_6, techicalBtn_7,
techicalBtn_8,techicalBtn_9, techicalBtn_10];

arrTechBtn.forEach(element => {
  element.style.height = '70px';
  element.style.width = '70px';
  wrap.append(element);
});

let switcher = true;

techicalBtn.addEventListener('click', () =>{
  getSheeps()
})
techicalBtn.innerText = 'getSheeps';
techicalBtn_0.addEventListener('click', () => {
  getSheep(1)
})
techicalBtn_0.innerText = 'getSheep';
techicalBtn_1.addEventListener('click', () => {
  updateSheep(1,'Rusted Tank', '#ff00ff')
})
techicalBtn_1.innerText = 'updateSheep';
techicalBtn_2.addEventListener('click', () => {
  createSheep('Super Furter', '#ff00ff')
})
techicalBtn_2.innerText = 'createSheep';
techicalBtn_3.addEventListener('click', () => {
  deleteSheep(6)
})
techicalBtn_3.innerText = 'deleteSheep';
techicalBtn_4.addEventListener('click', () => {
  if(!switcher) {
    stpStrtDriveEngine(3,'started')
    switcher = true;
  } else {
    stpStrtDriveEngine(3,'stopped')
    switcher = false;
  }
})
techicalBtn_4.innerText = 'stpStrtDriveEngine';
techicalBtn_5.addEventListener('click', () => {
  if(switcher) stpStrtDriveEngine(3, 'drive');
})
techicalBtn_5.innerText = 'stpStrtDriveEngine - drive';
techicalBtn_6.addEventListener('click', () => {
  getWinners()
})
techicalBtn_6.innerText = 'getWinners';
techicalBtn_7.addEventListener('click', () => {
  getWinner(1)
})
techicalBtn_7.innerText = 'getWinner';
techicalBtn_8.addEventListener('click', () => {
  createWinner(3,1,20)
})
techicalBtn_8.innerText = 'createWinner';
techicalBtn_9.addEventListener('click', () => {
  deleteWinner(3)
})
techicalBtn_9.innerText = 'deleteWinner';

techicalBtn_10.addEventListener('click', () => {
  updateWinner(3, 3, 33)
})
techicalBtn_10.innerText = 'updateWinner';