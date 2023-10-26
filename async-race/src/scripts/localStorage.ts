declare const localStorage: Storage;

import { body } from "./bodyCreator";

import { common_s } from "./common";
import { createTrack_s } from "./createTrack";
import { fixHeight_s } from "./fixHeight";
import { switchPages_s } from "./switchPages";
import { updateTrack_s } from "./updateTrack";
import { validationName_s } from "./validationName";
// import { Technical_temporary_s } from "./Technical_temporary";

// interface BodyNodes {
//   content: string;
// }
//  const bodyContainer: BodyNodes = {
//     content: '',
//   }
window.addEventListener('beforeunload', () => {
 
//   bodyContainer.content = body.innerHTML;
  const bodyContainer = body.innerHTML;
  localStorage.setItem('contentBody', JSON.stringify(bodyContainer));
});

export function saveStorage_fn(){
  const bodyContainer = body.innerHTML;
  localStorage.setItem('contentBody', JSON.stringify(bodyContainer));
}

export function loadStorage_fn() {

// document.addEventListener('load', function() {
    // setTimeout( ()=> {
// const contentBodySave: BodyNodes = JSON.parse(localStorage.getItem('contentBody') || '{}');
    const contentBodySave = JSON.parse(localStorage.getItem('contentBody') || '{}');
    let formattedString = contentBodySave.replace(/\\n/g, "").replace(/\\/g, "");
    formattedString = formattedString
    .replace(/&amp;gt;/g, ">")
    .replace(/&amp;lt;/g, "<")
    .replace(/&amp;quot;/g, "\"")
    .replace(/&amp;nbsp;/g, " ")
    .replace(/&amp;amp;/g, "&");
    body.innerHTML = String(formattedString);
    // body.innerHTML = 'checking'
    // body.insertAdjacentHTML('afterbegin', contentBodySave.content)
    console.log(formattedString, ' - formattedString');
    console.log('Page loaded!');
    // },3000)
  
    function setFunction() {
        common_s()
        createTrack_s()
        fixHeight_s()
        switchPages_s()
        updateTrack_s()
        validationName_s()
        // Technical_temporary_s()
}
setTimeout(setFunction, 3000)
//});
}
// loadStorage_fn()

