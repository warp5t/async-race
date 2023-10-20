 export function fixShapeTable() {
    const winnerDeskNav = document.querySelector('.winner-desk__navigate') as HTMLDivElement;
    const winnerBody = document.querySelector('.winner-desk__body') as HTMLDivElement;
    const navNodes = winnerDeskNav.children;
    const columsNodes = winnerBody.children;
    const borderDifference = 2;
    for (let i = 0; i < navNodes.length; i++) {
        const navNode = navNodes[i] as HTMLDivElement;
        const columnNode = columsNodes[i] as HTMLDivElement;
        // columnNode.style.width = columnNode.offsetWidth + 15 + 'px';
        navNode.style.width = (columnNode.offsetWidth - borderDifference) +'px';
    }
    
}
