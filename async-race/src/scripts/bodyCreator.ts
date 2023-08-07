export const body = document.getElementById('body') as HTMLBodyElement;
import space from '../images/space.jpg'
// export const mainContainer = document.createElement('div') as HTMLDivElement;
// body.appendChild(mainContainer)

body.innerHTML = `
 <div class="wrap">
    <div class="container-mode">
      <button class="container-mode__btn" id="toBeatleBtn">TO UFO</button>
      <button class="container-mode__btn" id="toWinnerBtn">TO WINNERS</button>
      </div>
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
        <div class="container-track">
          <div class="line-mode-1">
            <button class="line-mode-1__btn" id="SELECT">SELECT</button>
            <button class="line-mode-1__btn" id="REMOVE">REMOVE</button>
            <div class="line-mode-1__name" id="UFO-0">UFO-0</div>
          </div>
          <div class="line-mode-2">
            <div class="wrap-status mode-status">
            <div class="mode-status__status">A</div>
            <div class="mode-status__status">B</div>
            </div>
            <div class="wrap-image-bug"></div>
            <div class="wrap-image-comp"></div>
          </div>
        </div>
      </div>
    </div>
    </div>`;

    const wrap = document.querySelector('.wrap') as HTMLDivElement;
    wrap.style.backgroundImage = `url(${space})`;