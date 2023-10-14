// import { start_ID, stop_ID, remove_ID, select_ID } from "./createTrack";
import { subwrapFieldRace } from "./createTrack";

function checkMode() {
  // console.log(start_ID, stop_ID, remove_ID, select_ID, ' - modesSheep module')
}

const observer_0 = new MutationObserver(checkMode);

const config = {
  attributes: true,
  childList: true,
  subtree: true
};

observer_0.observe(subwrapFieldRace, config)