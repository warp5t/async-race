import { fixHeight } from "./fixHeight";
import { countUFO } from "./createTrack";
import { lastPage } from "./switchPages";
import { ammountPages } from "./createTrack";
import { countPages } from "./switchPages";
import { remainUFO } from "./createTrack";

const wrap = document.querySelector('.wrap') as HTMLDivElement;
const  techicalBtn = document.createElement('button') as HTMLButtonElement;
techicalBtn.style.height = '100px';
techicalBtn.style.width = '100px';
wrap.append(techicalBtn);
techicalBtn.addEventListener('click', () =>{
  console.log('Techical_temporary');
  console.log('countUFO - ', countUFO)
  console.log(lastPage, ' - lastPage')
  console.log(ammountPages, ' - ammountPages', countPages, ' - countPages')
  console.log(remainUFO, ' - remainUFO')
  fixHeight();
})