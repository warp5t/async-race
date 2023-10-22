import { countPageWinners } from "./switchWinner";

export function fixShapeWinner() {
	const winnerDeskNav = document.querySelector('.winner-desk__navigate') as HTMLDivElement;
	const winnerBody = document.querySelector('.winner-desk__body') as HTMLDivElement;
	const navNodes = winnerDeskNav.children;
	const columsNodes = winnerBody.children;
	const borderDifference = 2;
	for (let i = 0; i < navNodes.length; i++) {
			const navNode = navNodes[i] as HTMLDivElement;
			const columnNode = columsNodes[i] as HTMLDivElement;
			navNode.style.width = (columnNode.offsetWidth - borderDifference) +'px';
	}
    
}

export function fixHeightWinner() {
	console.log(countPageWinners);
	
  const countItem = 10;
	const heightFix = 19;
	const winnerDeskNav = document.querySelector('.winner-desk__navigate') as HTMLDivElement;
	const itemWinner = document.querySelector('.winner-desk__item') as HTMLDivElement;
	const winnerBody = document.querySelector('.winner-desk__body') as HTMLDivElement;
	const navNodes = winnerDeskNav.children;
	const heightItem = itemWinner.offsetHeight;
	const columnWinner = document.querySelector('.winner-desk__column') as HTMLDivElement;
    const ammountItems = columnWinner.children;
	const limitCountPage = Math.ceil(ammountItems.length / 10) - 1;
	console.log(limitCountPage, ' - limitCountPage', countPageWinners, ' - countPageWinners');
	
	if (limitCountPage === countPageWinners) {
		const crudeAmmount = (countPageWinners + 1) * countItem;
		const difference = crudeAmmount - ammountItems.length;
			const actualRemain = countItem - difference;
			console.log(actualRemain, ' - actualRemain', crudeAmmount, ' - crudeAmmount', difference, ' - difference', navNodes.length, ' - navNodes.length');		
			winnerBody.style.height = ((heightItem * actualRemain) + heightFix - 5) + 'px';
	} else {
		winnerBody.style.height = ((heightItem * countItem) + heightFix) + 'px';		
	}

}

