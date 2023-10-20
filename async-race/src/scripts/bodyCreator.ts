import space from '../images/space.jpg'


export const body = document.getElementById('body') as HTMLBodyElement;


body.innerHTML = `
<div class="wrap">
<div class="container-mode">
  <button class="container-mode__btn" id="toShipBtn">TO SHIPS</button>
  <button class="container-mode__btn" id="toWinnerBtn">TO WINNERS</button>
</div>
<div class="winners-desk">
<div class="winner-desk__navigate">
  <div class="winner-desk__title-head">Number</div>
  <div class="winner-desk__title-head">Ship</div>
  <div class="winner-desk__title-head">Name</div>
  <div class="winner-desk__title-head">Wins</div>
  <div class="winner-desk__title-head">Best time (seconds)</div>
</div>
  <div class="winner-desk__wrap-head">
    
      <div class="winner-desk__column" id="winNumber"></div>
    
    
      <div class="winner-desk__column" id="winShip"></div>
    
    
      <div class="winner-desk__column" id="winName"></div>
    
    
      <div class="winner-desk__column" id="winWins"></div>
    
    
      <div class="winner-desk__column" id="winTime"></div>
    
  </div>
  </div>
<div class="race-arena">
<div class="container-preparate">
  <div class="wrap-create">
    <input class="wrap-create__input" id="createName" type="text">
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
  <div class="field-race">
    <div class="subwrap-field-race">
      <div class="container-track" id="track-0">
        <div class="line-mode-1">
          <button class="line-mode-1__btn" id="SELECT-0">SELECT</button>
          <button class="line-mode-1__btn" id="REMOVE-0">REMOVE</button>
          <div class="line-mode-1__name" id="UFO-0">Space Sheep</div>
        </div>
        <div class="line-mode-2">
          <div class="wrap-status mode-status">
            <button class="mode-status__start" id="START-1"></button>
            <button class="mode-status__finish" id="STOP-1"></button>
          </div>
          <div class="wrap-image-ship"></div>
          <div class="wrap-image-earth"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="page-btn">
  <button class="page-btn__previous">PREVIOUS</button>
  <button class="page-btn__next">NEXT</button>
</div>
</div>
</div>
`;

body.style.backgroundImage = `url(${space})`;
