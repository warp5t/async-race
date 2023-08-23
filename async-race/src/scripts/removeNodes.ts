import {body} from './bodyCreator'

function deleteNodeBody() { // for deleting excess nodes inside body tag
  if(body.children.length > 1){
    for (let i = 0; i < body.children.length; i++) {
      const child = body.children[i];
      if(child.className !== 'wrap') {
        child.remove()
      }
    }
  }
}


const observer_1 = new MutationObserver(deleteNodeBody);

const config = {
  attributes: true,
  childList: true,
  subtree: true
};

observer_1.observe(body, config)