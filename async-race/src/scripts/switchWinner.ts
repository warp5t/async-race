import {
  fixHeightWinner
} from "./fixShapeWinners";

const nextWinners = document.getElementById('nextWinners') as HTMLButtonElement;
const prevWinners = document.getElementById('prevWinners') as HTMLButtonElement;
export let countPageWinners = 0;

function rollItems() {
  const itemWinner = document.querySelector('.winner-desk__item') as HTMLDivElement;
  const winnerDeskColumn = document.querySelectorAll('.winner-desk__column') as NodeListOf < HTMLDivElement >
  const heightItem = itemWinner.offsetHeight;
  const countItem = 10;
  const heightFix = 7;
  let result = '';
  if (countPageWinners === 0) {
    result = (heightItem * countItem * countPageWinners) + 'px';
  } else {
    result = ((heightItem * countItem * countPageWinners) + heightFix) + 'px';
  }
  winnerDeskColumn.forEach((item) => {
    item.style.bottom = result;
  })
}

nextWinners.addEventListener('click', () => {
  console.log('nextWinners');
  const itemWinner = document.querySelector('.winner-desk__column') as HTMLDivElement;
  const ammountItems = itemWinner.children;
  const limitCountPage = Math.ceil(ammountItems.length / 10) - 1;
  if (limitCountPage > countPageWinners) {
    countPageWinners++
    fixHeightWinner()
    if (countPageWinners > 0) {
      console.log('term 26');
      rollItems()
    }
  }
})

prevWinners.addEventListener('click', () => {
  console.log('prevWinners');
  if (countPageWinners > 0) {
    countPageWinners--
    fixHeightWinner()
    rollItems()
  }
})