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
  const countItem = 10;
	const heightFix = 19;
	const itemWinner = document.querySelector('.winner-desk__item') as HTMLDivElement;
	const winnerBody = document.querySelector('.winner-desk__body') as HTMLDivElement;
  const heightItem = itemWinner.offsetHeight;
  winnerBody.style.height = ((heightItem * countItem) + heightFix) + 'px';
}