import {
	svg_ID
} from "./createTrack";

export const arrWrapSvg: Array < HTMLDivElement > = [];

export function wrapSvgCollect() {
	const svg = document.getElementById(`${svg_ID}`) as HTMLOrSVGImageElement;
	arrWrapSvg.push(svg.parentNode as HTMLDivElement)
}
