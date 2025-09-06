import { getDocks, getDocksAndTheirHaulers, getHaulingShips } from "./database.js";

const docks = getDocks();
const haulers = getHaulingShips();
const dockHaulers = getDocksAndTheirHaulers();

document.addEventListener("click", (clickEvent) => {
  const clickedDock = clickEvent.target;

  if (clickedDock.classList.contains("dock-item")) {
    let shipCount = [];

    //Find the ID from the clicked item and match it to the id from the dockAndHaulers

    const dockId = clickedDock.dataset.id

    for (const dockContract of dockHaulers) {
      if (dockContract.dockId === parseInt(dockId))
        for (const hauler of haulers) {
          if (dockContract.haulerId === parseInt(hauler.id))
          shipCount.push(hauler.name)}
    }

    //Add the object to a new array if it matches



    //Loop through the haulers to get the names of the haulers for each dock and display the names in the click event.




    let shipsDisplay = shipCount.join("\n- ");

    if (shipCount.length > 1) {
      window.alert(
        `The ${clickedDock.dataset.city} dock can currently service ${shipCount.length} ships: \n- ${shipsDisplay}`
      );
    } else if (shipCount.length === 1) {
      window.alert(
        `The ${clickedDock.dataset.city} dock can currently service ${shipCount.length} ship: \n - ${shipsDisplay}`
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
