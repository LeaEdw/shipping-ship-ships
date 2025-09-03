import { getDocks, getDocksForHauler, getHaulingShips } from "./database.js";

const docks = getDocks();
const haulers = getHaulingShips();
const dockHaulers = getDocksForHauler();

document.addEventListener("click", (clickEvent) => {
  const clickedDock = clickEvent.target;

  if (clickedDock.classList.contains("dock-item")) {
    let shipCount = [];

    for (const relation of dockHaulers) {

      if (relation.id === parseInt(clickedDock.dataset.id)) {
        for (const hauler of haulers) {
          if (hauler.id === relation.id) {
            shipCount.push(hauler.name);
            break;
          }
        }
      }
    }

    let shipsDisplay = shipCount.join("\n- ");

    if (shipCount.length > 1) {
      window.alert(
        `The ${clickedDock.dataset.city} dock is currently unloading ${shipCount.length} ships: \n- ${shipsDisplay}`
      );
    } else if (shipCount.length === 1) {
      window.alert(
        `The ${clickedDock.dataset.city} dock is currently unloading ${shipCount.length} ship: \n - ${shipsDisplay}`
      );
    } else if (shipCount.length === 0) {
      window.alert(
        `There are currently ${shipCount.length} ships being unloaded at the ${clickedDock.dataset.city} dock.`
      );
    } else window.alert(`Seems like we're lost at sea.`);
  }
});

export const DockList = () => {
  docks.sort((a, b) => a.location.localeCompare(b.location));
  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li 
                    class="dock-item"
                    data-city="${dock.location}"
                    data-id="${dock.id}"
                    data-capacity="${dock.maxCap}">
                            ${dock.location} can hold ${dock.maxCap} million tons of cargo.
                   </li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
