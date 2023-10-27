import {
  fixHeight
} from './fixHeight'
import {
  setListenerSelect
} from './selectRemoveListener'
import startImage from '../images/finish-flag.png'
import finishImage from '../images/stop.png'

import {
  setListStartShip,
  setListStopShip
} from './startStopShip'
import {
  wrapSvgCollect
} from './animation'
import {
  updateShip
} from './serverRequest'

export const createBtn = document.getElementById('createBtn') as HTMLButtonElement;
export const createName = document.getElementById('createName') as HTMLInputElement;
const createColor = document.getElementById('createColor') as HTMLInputElement;
export const subwrapFieldRace = document.querySelector('.subwrap-field-race') as HTMLDivElement;

export let ammountPages = 0,
  remainUFO = 0;
let counter_ID = 2,
  nameUFO = '';
export let nameID = 'UFO-1',
  svg_ID = 'svg-1',
  countUFO = 1,
  start_ID = 'START-1',
  stop_ID = 'STOP-1',
  remove_ID = 'REMOVE-1',
  select_ID = 'SELECT-1',
  track_ID = 'track-1';

(function () {
  remainUFO = countUFO % 7;
}())

setListenerSelect() // for first spase ship
setListStartShip() // for first space ship
setListStopShip() // for first space ship
wrapSvgCollect() // for first space ship

export function updateCountUFO() {
  const GARAGE = document.getElementById('title') as HTMLHeadElement;
  countUFO = subwrapFieldRace.children.length;
  GARAGE.innerText = `GARAGE (${countUFO})`
}

function set_ID() {
  nameID = 'UFO-' + counter_ID;
  svg_ID = 'svg-' + counter_ID;
  select_ID = 'SELECT-' + counter_ID;
  remove_ID = 'REMOVE-' + counter_ID;
  start_ID = 'START-' + counter_ID;
  stop_ID = 'STOP-' + counter_ID;
  track_ID = 'track-' + (counter_ID);
  counter_ID++
}

(function () {
  createName.placeholder = 'Enter a name for the craft';
  createName.style.color = '#f9f9f9';
}())

function setName() {
  if (createName.value.length > 0) {
    nameUFO = createName.value;
  }
  return nameUFO
}

function setColor() {
  const svgID_name = document.getElementById(`${svg_ID}`) as HTMLDivElement;
  svgID_name.setAttribute('fill', `${createColor.value}`);
  return createColor.value
}

function disableCreateBtn() {
  createName.style.color = "#f9f9f9";
  if (createName.value.length === 0) {
    createBtn.disabled = true;
  } else {
    createBtn.disabled = false;
  }
}

function addIconStrtFnsh() {
  const startBtn = document.getElementById(`${start_ID}`) as HTMLButtonElement;
  const finishBtn = document.getElementById(`${stop_ID}`) as HTMLButtonElement;
  const iconStart = document.createElement('img') as HTMLImageElement;
  const iconFinish = document.createElement('img') as HTMLImageElement;
  startBtn.append(iconStart);
  finishBtn.append(iconFinish)
  iconStart.classList.add('size-icon-race')
  iconFinish.classList.add('size-icon-race')
  iconStart.src = startImage;
  iconFinish.src = finishImage;
}
addIconStrtFnsh()

function randomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  while (randomColor.length < 6) {
    randomColor = "0" + randomColor;
  }
  return "#" + randomColor;
}

function trackCreator(): HTMLDivElement {

  const contaierTrack = document.createElement('div') as HTMLDivElement;
  contaierTrack.classList.add('container-track');
  console.log(nameUFO, ' - nameUFO');

  contaierTrack.innerHTML = `
<div class="line-mode-1">
<button class="line-mode-1__btn" id="${select_ID}">SELECT</button>
<button class="line-mode-1__btn" id="${remove_ID}">REMOVE</button>
<div class="line-mode-1__name" id="${nameID}">${nameUFO}</div>
  </div>
  <div class="line-mode-2">
  <div class="wrap-status mode-status">
  <button class="mode-status__st-fn" id="${start_ID}"></button>
  <button class="mode-status__st-fn" id="${stop_ID}"></button>
  </div>
  <div class="wrap-image-ship"><svg id="${svg_ID}" xmlns="http://www.w3.org/2000/svg" width="80" height="80" version="1.0" viewBox="0 0 512 512" fill="#ce5c00"><path d="M239 129.5c-19.4 2.8-39.9 10.8-55.7 21.7-9.9 6.7-24.4 21.1-31.2 30.8-6.7 9.5-13.3 22.6-17.1 33.7l-2.9 8.6-8.1 2.4c-17.2 4.9-40 14.3-63.4 26C39.3 263.3 8 280.9 4.8 284c-5.7 5.7-6.1 15.3-.9 21.3 6.8 7.7 58 31.3 87.6 40.4 7.1 2.2 8.8 3.2 15 9.2 43.6 41.8 107.4 65.5 164 61.1 48.8-3.9 99.4-26.3 134.5-59.6 8.1-7.8 8.9-8.3 17.5-10.9 26.2-7.9 77-31.2 85.2-39.1 4.3-4 4.3-4.1 4.3-11.2 0-6.4-.3-7.5-2.7-10.2-2.9-3.1-17.4-11.7-41.1-24.3-26.5-14.2-49.7-24.4-72.2-31.8l-15.6-5.1-2.3-7.1c-12.8-39.6-45.7-71.6-85.4-83.1-17.3-5-37.3-6.5-53.7-4.1zm40 33.6c10.3 2.4 26.3 9.9 34.6 16.2 12.6 9.6 23.4 23 29.9 37 5.9 12.8 6.3 12-5.7 14.5-30.2 6.3-46.1 8.2-73.9 8.9-24.8.6-38.1-.2-61.6-3.7-13.2-2-36.2-6.6-37-7.4-.8-.8 1.7-7.6 5.7-15.6 14.2-28.3 41.2-47.5 73.2-52 9-1.3 24.9-.3 34.8 2.1zm-123.5 96.4c17.9 4.2 37.5 7.8 54.5 10.2 15.9 2.2 69.7 2.5 86 .5 16.7-2.1 43.1-6.8 61.4-10.8l16.8-3.7 7.7 2.2c13.5 3.9 35.1 13 57.9 24.3 12.2 6.1 22.5 11.5 22.8 12 1 1.5-27.7 13.5-49.6 20.6-51.1 16.7-109.2 23.5-181 21.1-69.7-2.3-122.6-13.8-175.5-37.9l-6.9-3.2 3.9-2.4c6.2-3.8 36.9-18.8 48-23.5 12.3-5.2 34.3-12.8 37-12.9 1.2 0 8.8 1.6 17 3.5zM194 366c34.5 3.3 94.4 3.1 128.2-.5 7.8-.8 14.3-1.3 14.5-1.1.7.6-15.4 7.5-25.8 11-28.4 9.4-59.2 11.4-87.6 5.7-12.2-2.5-31.2-8.8-40.7-13.6-6.7-3.3-6.9-3.5-3.1-3 2.2.3 8.7.9 14.5 1.5z"></path><path d="M156 273.2c-10.7 3-15.2 16.7-8.3 24.9 7.5 8.9 21.1 7.8 26.5-2.1 2.5-4.5 2-12.9-.9-16.8-4-5.3-11.1-7.8-17.3-6zM347.7 273.4c-7.2 2.6-10.7 7.6-10.7 15.3 0 9.1 6.3 15.3 15.5 15.3 13.5 0 20.7-14.8 12.4-25.4-4.1-5.2-11.2-7.3-17.2-5.2zM251.5 289.5c-17 5.9-13 30.5 5 30.5 9.3 0 15.5-6.2 15.5-15.6 0-10.9-10.3-18.4-20.5-14.9z"></path></svg></div>
  <div class="wrap-image-earth"><img src="http://localhost:8056/images/earth.png" style="width: 80px; height: 80px;"></div>
  </div>`;
  contaierTrack.id = `track-${counter_ID - 1}`
  return contaierTrack
}
import {
  createShip
} from './serverRequest';

import {
  randomName
} from './randomize'
import {
  spliceName
} from './randomize'

import {
  ammountPages_listener
} from './selectRemoveListener'

export function reassigneCountUFO() {
  const subwrapField = document.querySelector('.subwrap-field-race') as HTMLDivElement;
  countUFO = subwrapField.children.length;
  remainUFO = subwrapField.children.length % 7;
  ammountPages = ammountPages_listener;
}

const hatchBtn = document.getElementById('HATCH') as HTMLButtonElement;
createName.addEventListener("focus", disableCreateBtn);
createName.addEventListener("input", disableCreateBtn);
createBtn.addEventListener('click', () => {
  countUFO++
  remainUFO = countUFO % 7;
  ammountPages = Math.trunc(countUFO / 7);
  set_ID()
  const name = setName();
  subwrapFieldRace.append(trackCreator())
  const color = setColor();
  createShip(name, color)
  updateShip(countUFO, name, color)
  fixHeight()
  addIconStrtFnsh()
  setListenerSelect()
  setListStartShip()
  setListStopShip()
  wrapSvgCollect()
  updateCountUFO()
})
hatchBtn.addEventListener('click', () => {
  let ammountSpaceCraft = 100;
  while (ammountSpaceCraft > 0) {
    countUFO++
    remainUFO = countUFO % 7;
    ammountPages = Math.trunc(countUFO / 7);
    const colorShip = randomColor();
    randomName()
    set_ID()
    nameUFO = spliceName[spliceName.length - 1];
    createShip(nameUFO, colorShip)
    updateShip(countUFO, nameUFO, colorShip)
    subwrapFieldRace.append(trackCreator())
    const svgID_name = document.getElementById(`${svg_ID}`) as HTMLDivElement;
    svgID_name.setAttribute('fill', colorShip);
    fixHeight()
    addIconStrtFnsh()
    setListenerSelect()
    setListStartShip()
    setListStopShip()
    wrapSvgCollect()
    updateCountUFO()
    ammountSpaceCraft--
  }
})