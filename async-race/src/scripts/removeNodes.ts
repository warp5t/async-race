import {body} from './bodyCreator'

function deleteNodeBody() {
  if(body.children.length > 1){
    for (let i = 0; i < body.children.length; i++) {
      const child = body.children[i];
      if(child.className !== 'wrap') {
        child.remove()
      }
    }
  }
}


const observer = new MutationObserver(deleteNodeBody);

const config = {
  attributes: true,
  childList: true,
  subtree: true
};

observer.observe(body, config)