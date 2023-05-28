import futurama from "../assets/icons8-futurama-bender-40.png";
import grey from "../assets/icons8-grey-40.png";
import ironMan from "../assets/icons8-iron-man-40.png";
import jasonV from "../assets/icons8-jason-voorhees-40.png";
import michael from "../assets/icons8-michael-myers-40.png";
import mario from "../assets/icons8-super-mario-40.png";
import thor from "../assets/icons8-thor-40.png";
import venom from "../assets/icons8-venom-head-40.png";

function shuffleArray(array: string[][]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const imagesSrc = [
  [futurama, "futurama", "0"],
  [futurama, "futurama", "1"],
  [grey, "grey", "2"],
  [grey, "grey", "3"],
  [ironMan, "ironMan", "4"],
  [ironMan, "ironMan", "5"],
  [jasonV, "jason", "6"],
  [jasonV, "jason", "7"],
  [mario, "mario", "8"],
  [mario, "mario", "9"],
  [thor, "thor", "10"],
  [thor, "thor", "11"],
  [venom, "venom", "12"],
  [venom, "venom", "13"],
  [michael, "michael", "14"],
  [michael, "michael", "15"],
];

export default shuffleArray;
