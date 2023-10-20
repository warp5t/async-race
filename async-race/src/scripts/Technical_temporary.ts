import {
  updateShip,
  getShips,
  getShip,
  createShip,
  deleteShip,
  stpStrtDriveEngine,
  getWinners,
  getWinner,
  createWinner,
  deleteWinner,
  updateWinner
} from "./serverRequest";
import {
  loadStorage_fn,
  saveStorage_fn
} from "./localStorage";

import {
  switchArenaWinn
} from "./switchArenaWinners";

import { arrShipBool } from "./serverRequest";

// import { winnersBtn } from "./winnersTable";
import { fixShapeTable } from "./fixShapeWinners";


const wrap = document.querySelector('.wrap') as HTMLDivElement;
const techicalBtn = document.createElement('button') as HTMLButtonElement;
const techicalBtn_0 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_1 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_2 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_3 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_4 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_5 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_6 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_7 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_8 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_9 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_10 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_11 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_12 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_13 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_14 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_15 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_16 = document.createElement('button') as HTMLButtonElement;
const techicalBtn_17 = document.createElement('button') as HTMLButtonElement;
const arrTechBtn = [techicalBtn, techicalBtn_0, techicalBtn_1, techicalBtn_2,
  techicalBtn_3, techicalBtn_4, techicalBtn_5, techicalBtn_6, techicalBtn_7,
  techicalBtn_8, techicalBtn_9, techicalBtn_10, techicalBtn_11, techicalBtn_12,
  techicalBtn_13, techicalBtn_14, techicalBtn_15, techicalBtn_16, techicalBtn_17
];

arrTechBtn.forEach(element => {
  element.style.height = '70px';
  element.style.width = '70px';
  wrap.append(element);
});

let switcher = false;

export function Technical_temporary_s() {

  techicalBtn.addEventListener('click', () => {
    getShips()
  })
  techicalBtn.innerText = 'get\nSheeps';

  techicalBtn_0.addEventListener('click', () => {
    interface Ship {
      id: number,
      color: string,
      name: string
    }
    const winners = getShip(1)
      .then((data: unknown) => {
        const shipData = data as Ship[];
        console.log(shipData);
        for(const key in shipData) {
          console.log(shipData[key]);         
        }
      })
      .catch(error => {
        console.error(error);
      });
  
    console.log(winners);
  })
  techicalBtn_0.innerText = 'get\nSheep';

  techicalBtn_1.addEventListener('click', () => {
    updateShip(1, 'Rusted Tank', '#ff00ff')
  })
  techicalBtn_1.innerText = 'update\nSheep';

  techicalBtn_2.addEventListener('click', () => {
    createShip('Super Furter', '#ff00ff')
  })
  techicalBtn_2.innerText = 'create\nSheep';

  techicalBtn_3.addEventListener('click', () => {
    deleteShip(6)
  })
  techicalBtn_3.innerText = 'delete\nSheep';
  techicalBtn_4.addEventListener('click', () => {
    if (!switcher) {
      stpStrtDriveEngine(3, 'started')
      stpStrtDriveEngine(3, 'drive')
      switcher = true;
    } else {
      stpStrtDriveEngine(3, 'stopped')
      switcher = false;
      console.log('stop')
    }
  })
  techicalBtn_4.innerText = 'stpStrt\nDriveEngine';
  techicalBtn_5.addEventListener('click', () => {
    if (switcher) stpStrtDriveEngine(3, 'drive');
  })
  techicalBtn_5.innerText = 'stpStrt\nDriveEngine\ndrive';

  techicalBtn_6.addEventListener('click', () => {
    interface Ship {
      id: number,
      wins: number,
      time: number
    }
    const winners = getWinners('ASC', 'wins')
      .then((data: unknown) => {
        const shipData = data as Ship[];
        console.log(shipData);
        shipData.forEach((elem: Ship) => {
          console.log(elem.id, elem.wins, elem.time);
        });
      })
      .catch(error => {
        console.error(error);
      });
  
    console.log(winners);
  });
  
  

  techicalBtn_6.innerText = 'get\nWinners';

  techicalBtn_7.addEventListener('click',async () => {
    const result = await getWinner(3);
    console.log(result);
    
  })
  techicalBtn_7.innerText = 'get\nWinner';

  techicalBtn_8.addEventListener('click', () => {
    for (let i = 0; i < 5; i++){
      const randTime = Math.random()*10
      const randWins = Math.trunc(Math.random()*10)
      createWinner(i + 1, randWins, randTime)

    }
  })
  techicalBtn_8.innerText = 'create\nWinner';
  techicalBtn_9.addEventListener('click', () => {
    deleteWinner(3)
  })
  techicalBtn_9.innerText = 'delete\nWinner';

  techicalBtn_10.addEventListener('click', () => {
    updateWinner(3, 3, 33)
  })
  techicalBtn_10.innerText = 'update\nWinner';

  techicalBtn_11.addEventListener('click', () => {
    console.log('techicalBtn_11')
    switchArenaWinn()

  })
  techicalBtn_11.innerText = 'switch\nWinner\nArena';

  techicalBtn_12.addEventListener('click', () => {
    console.log('techicalBtn_12')
    loadStorage_fn()
  })
  techicalBtn_12.innerText = 'load\nStorage';

  techicalBtn_13.addEventListener('click', () => {
    console.log('techicalBtn_13')
    saveStorage_fn()
  })
  techicalBtn_13.innerText = 'save\nStorage';

  techicalBtn_14.addEventListener('click', () => {
    console.log('techicalBtn_14');
  });

  techicalBtn_14.innerText = 'reset\nCount\nWinners';

  techicalBtn_15.addEventListener('click', () => {
    console.log('techicalBtn_15');
  });

  techicalBtn_15.innerText = 'additCountShip';

  techicalBtn_16.addEventListener('click', () => {
    console.log('techicalBtn_16');
    console.log(arrShipBool);
    arrShipBool.forEach((currentValue, index) => {
      console.log(`id.[${index}] - ${currentValue}`);  
  });
    
  });

  techicalBtn_16.innerText = 'arrShipBool';

  techicalBtn_17.addEventListener('click', () => {
    fixShapeTable()
    // const winnerDeskNav = document.querySelector('.winner-desk__navigate') as HTMLDivElement;
    // const winnerBody = document.querySelector('.winner-desk__body') as HTMLDivElement;
    // const navNodes = winnerDeskNav.children;
    // const columsNodes = winnerBody.children;
    // const borderDifference = 2;
    // for (let i = 0; i < navNodes.length; i++) {
    //     const navNode = navNodes[i] as HTMLDivElement;
    //     const columnNode = columsNodes[i] as HTMLDivElement;
    //     columnNode.style.width = columnNode.offsetWidth + 15 + 'px';
    //     navNode.style.width = (columnNode.offsetWidth - borderDifference) +'px';
    // }
});


  techicalBtn_17.innerText = 'nodesChild';
}
Technical_temporary_s()