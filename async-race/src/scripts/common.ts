export const body = document.getElementById('body') as HTMLBodyElement;

export const mainContainer = document.createElement('div') as HTMLDivElement;
body.appendChild(mainContainer)

// mainContainer.innerHTML = `
// <div class="wrap">
// <div class="container-mode">
//   <button class="container-mode__btn" id="beatleBtn">Beatles</button>
//   <button class="container-mode__btn" id="winnerBtn">Winners</button>
//   </div>
// <div class="container-preparate">
//   <div class="wrap-create">
//     <input id="createTxt" type="text">
//     <input type="color">
//     <button class="container-preparate__btn" id="createBtn">Create</button>
//   </div>
//   <div class="wrap-update">
//     <input type="text">
//     <input type="color">
//     <button class="container-preparate__btn" id="updateBtn">Update</button>
//   </div>
// </div>
// </div>`;

const inputTxtCreate = document.getElementById('createName') as HTMLInputElement;

const btnCreate = document.getElementById('createBtn') as HTMLButtonElement;


btnCreate.addEventListener('click', () => {
  const fieldTxt = document.createElement('div') as HTMLDivElement;
  fieldTxt.innerText = inputTxtCreate.value;
  body.append(fieldTxt)
})
const wrapImageBug = document.querySelector('.wrap-image-bug') as HTMLDivElement;
wrapImageBug.innerHTML = `<svg id="svgBug" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="100" height="100" viewBox="0 0 512 512"><path d="M498.667 290.667H404V240c0-1.016.313-2.036.291-3.055C452.4 231.927 480 200.272 480 148.333v-12c0-7.364-5.971-13.333-13.333-13.333s-13.333 5.969-13.333 13.333v12c0 38.399-17.005 58.821-51.885 62.167-6.069-27.025-20.875-50.381-45.537-55.7-3.745-28.54-21.413-52.689-46.115-65.227 10.321-10.501 16.871-24.887 16.871-40.74V37c0-7.364-5.971-13.333-13.333-13.333S300 29.636 300 37v11.833C300 66.203 285.536 80 268.167 80h-23c-17.369 0-31.833-13.797-31.833-31.167V37c0-7.364-5.971-13.333-13.333-13.333S186.667 29.636 186.667 37v11.833c0 15.853 6.549 30.239 16.871 40.741-24.701 12.537-42.453 36.687-46.199 65.227-24.695 5.324-39.465 28.736-45.519 55.808-35.759-2.96-53.153-23.403-53.153-62.276v-12c0-7.364-5.971-13.333-13.333-13.333S32 128.969 32 136.333v12c0 52.415 27.439 84.168 76.375 88.739-.022.976-.375 1.953-.375 2.928v50.667H13.333C5.971 290.667 0 296.636 0 304s5.971 13.333 13.333 13.333H108v23c0 10.628 1.469 20.993 3.608 30.992C60.659 374.777 32 406.773 32 460.333v12c0 7.364 5.971 13.333 13.333 13.333s13.333-5.969 13.333-13.333v-12c0-41.795 20.151-62.291 61.565-62.649 22.451 53.208 75.151 90.649 136.435 90.649 61.276 0 113.971-37.432 136.425-90.629 40.519.784 60.241 21.283 60.241 62.629v12c0 7.364 5.971 13.333 13.333 13.333S480 479.697 480 472.333v-12c0-53.1-28.823-85.013-78.96-88.921 2.151-10.025 2.96-20.421 2.96-31.079v-23h94.667c7.363 0 13.333-5.969 13.333-13.333s-5.971-13.333-13.333-13.333zm-256 170.188c-60.333-6.964-108-58.353-108-120.521V240c0-20.793 6.948-50.531 24.483-58.035 6.627 18.368 24.56 31.368 45.184 31.368h38.333v247.522zm-38.334-274.188c-11.58 0-21-9.42-21-21 0-32.532 26.468-59 59-59H271c32.532 0 59 26.468 59 59 0 11.58-9.42 21-21 21H204.333zm173 153.666c0 62.627-47.027 114.32-108 120.673V213.333H309c20.624 0 37.891-13 44.517-31.368 17.535 7.504 23.816 37.241 23.816 58.035v100.333z"/></svg>`;


const svgBug = document.getElementById('svgBug') as HTMLOrSVGImageElement;

svgBug.setAttribute('fill', '#A91717');
svgBug.style.transform = 'rotate(90deg)';

