import space from '../images/space.jpg'


export const body = document.getElementById('body') as HTMLBodyElement;


body.innerHTML = `
<div class="wrap">
  <div class="winners-desk hide-block">
    <div class="winner-desk__wrap-head">
      <div class="winner-desk__head">
        <div class="winner-desk__title-head">Number</div>
      </div>
      <div class="winner-desk__head">
        <div class="winner-desk__title-head">Ship</div>
      </div>
      <div class="winner-desk__head">
        <div class="winner-desk__title-head">Name</div>
      </div>
      <div class="winner-desk__head">
        <div class="winner-desk__title-head">Wins</div>
      </div>
      <div class="winner-desk__head">
        <div class="winner-desk__title-head">Best time (seconds)</div>
      </div>
    </div>
  </div>
  <div class="race-arena">
  <div class="container-mode">
    <button class="container-mode__btn" id="toShipBtn">TO SHIP</button>
    <button class="container-mode__btn" id="toWinnerBtn">TO WINNERS</button>
  </div>
  <div class="container-preparate">
    <div class="wrap-create">
      <input class="wrap-create__input" id="createName" type="text" placeholder="Enter a name for the craft" style="color: rgb(162, 2, 2);">
      <input class="wrap-create__input" id="createColor" type="color">
      <button class="container-preparate__btn" id="createBtn">Create</button>
    </div>
    <div class="wrap-update">
      <input class="wrap-update__input" id="updateName" type="text">
      <input class="wrap-update__input" id="updateColor" type="color">
      <button class="container-preparate__btn" id="updateBtn">Update</button>
    </div>
  </div>
  <div class="container-third">
    <button class="container-third__btn" id="RACE">RACE</button>
    <button class="container-third__btn" id="RESET">RESET</button>
    <button class="container-third__btn" id="HATCH">HATCH UFO</button>
  </div>
  <div class="wrap-tracks">
    <div class="container-title">
      <h2 class="container-title__title" id="title">GARAGE (1)</h2>
      <h3 class="container-title__page" id="page">Page #1</h3>
    </div>
    <div class="field-race" style="height: 128px;">
      <div class="subwrap-field-race">
        <div class="container-track" id="track-0">
          <div class="line-mode-1">
            <button class="line-mode-1__btn" id="SELECT-0">SELECT</button>
            <button class="line-mode-1__btn" id="REMOVE-0">REMOVE</button>
            <div class="line-mode-1__name" id="UFO-0">Space Sheep</div>
          </div>
          <div class="line-mode-2">
            <div class="wrap-status mode-status">
              <button class="mode-status__start" id="START-1"><img class="size-icon-race" src="http://localhost:8056/images/finish-flag.png"></button>
              <button class="mode-status__finish" id="STOP-1"><img class="size-icon-race" src="http://localhost:8056/images/stop.png"></button>
            </div>
            <div class="wrap-image-ship"><svg id="svg-0" xmlns="http://www.w3.org/2000/svg" width="80" height="80" version="1.0" viewBox="0 0 512 512" fill="#4d5d53"><path d="M239 129.5c-19.4 2.8-39.9 10.8-55.7 21.7-9.9 6.7-24.4 21.1-31.2 30.8-6.7 9.5-13.3 22.6-17.1 33.7l-2.9 8.6-8.1 2.4c-17.2 4.9-40 14.3-63.4 26C39.3 263.3 8 280.9 4.8 284c-5.7 5.7-6.1 15.3-.9 21.3 6.8 7.7 58 31.3 87.6 40.4 7.1 2.2 8.8 3.2 15 9.2 43.6 41.8 107.4 65.5 164 61.1 48.8-3.9 99.4-26.3 134.5-59.6 8.1-7.8 8.9-8.3 17.5-10.9 26.2-7.9 77-31.2 85.2-39.1 4.3-4 4.3-4.1 4.3-11.2 0-6.4-.3-7.5-2.7-10.2-2.9-3.1-17.4-11.7-41.1-24.3-26.5-14.2-49.7-24.4-72.2-31.8l-15.6-5.1-2.3-7.1c-12.8-39.6-45.7-71.6-85.4-83.1-17.3-5-37.3-6.5-53.7-4.1zm40 33.6c10.3 2.4 26.3 9.9 34.6 16.2 12.6 9.6 23.4 23 29.9 37 5.9 12.8 6.3 12-5.7 14.5-30.2 6.3-46.1 8.2-73.9 8.9-24.8.6-38.1-.2-61.6-3.7-13.2-2-36.2-6.6-37-7.4-.8-.8 1.7-7.6 5.7-15.6 14.2-28.3 41.2-47.5 73.2-52 9-1.3 24.9-.3 34.8 2.1zm-123.5 96.4c17.9 4.2 37.5 7.8 54.5 10.2 15.9 2.2 69.7 2.5 86 .5 16.7-2.1 43.1-6.8 61.4-10.8l16.8-3.7 7.7 2.2c13.5 3.9 35.1 13 57.9 24.3 12.2 6.1 22.5 11.5 22.8 12 1 1.5-27.7 13.5-49.6 20.6-51.1 16.7-109.2 23.5-181 21.1-69.7-2.3-122.6-13.8-175.5-37.9l-6.9-3.2 3.9-2.4c6.2-3.8 36.9-18.8 48-23.5 12.3-5.2 34.3-12.8 37-12.9 1.2 0 8.8 1.6 17 3.5zM194 366c34.5 3.3 94.4 3.1 128.2-.5 7.8-.8 14.3-1.3 14.5-1.1.7.6-15.4 7.5-25.8 11-28.4 9.4-59.2 11.4-87.6 5.7-12.2-2.5-31.2-8.8-40.7-13.6-6.7-3.3-6.9-3.5-3.1-3 2.2.3 8.7.9 14.5 1.5z"></path><path d="M156 273.2c-10.7 3-15.2 16.7-8.3 24.9 7.5 8.9 21.1 7.8 26.5-2.1 2.5-4.5 2-12.9-.9-16.8-4-5.3-11.1-7.8-17.3-6zM347.7 273.4c-7.2 2.6-10.7 7.6-10.7 15.3 0 9.1 6.3 15.3 15.5 15.3 13.5 0 20.7-14.8 12.4-25.4-4.1-5.2-11.2-7.3-17.2-5.2zM251.5 289.5c-17 5.9-13 30.5 5 30.5 9.3 0 15.5-6.2 15.5-15.6 0-10.9-10.3-18.4-20.5-14.9z"></path></svg></div>
            <div class="wrap-image-earth"><img src="http://localhost:8056/images/earth.png" style="width: 80px; height: 80px;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page-btn">
    <button class="page-btn__previous" disabled="">PREVIOUS</button>
    <button class="page-btn__next" disabled="">NEXT</button>
  </div>
  </div>
</div>
`;

body.style.backgroundImage = `url(${space})`;
