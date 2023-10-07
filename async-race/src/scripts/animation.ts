import { spliceName } from "./randomize";
import { svg_ID } from "./createTrack";

// var element_parent = element_child.parentNode; 

console.log(spliceName.length, spliceName)

const arrWrapSvg: Array<HTMLDivElement> = [];

export function wrapSvgCollect() {  
		const svg = document.getElementById(`${svg_ID}`) as HTMLOrSVGImageElement;
		arrWrapSvg.push(svg.parentNode as HTMLDivElement)
}