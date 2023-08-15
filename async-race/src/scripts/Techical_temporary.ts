import { fixHeight } from "./fixHeight";
import { countUFO } from "./createTrack";


const wrap = document.querySelector('.wrap') as HTMLDivElement;
const  techicalBtn = document.createElement('button') as HTMLButtonElement;
techicalBtn.style.height = '100px';
techicalBtn.style.width = '100px';
wrap.append(techicalBtn);
techicalBtn.addEventListener('click', () =>{
  console.log('Techical_temporary');
  console.log('countUFO - ', countUFO)
  fixHeight();
})