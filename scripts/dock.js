import { getDocks, getHaulingShips } from "./database.js";

const haulingShips = getHaulingShips();

document.addEventListener("click", (clickEvent) => {
  const clickedDock = clickEvent.target;

  // Make sure the target is the only part of the page that triggers this event -->
  if (clickedDock.classList.contains("dock-item")) {
    // Get the ID of the dock
    const dockId = clickedDock.dataset.id;
    //Create an empty array that will hold the ships that are at the chosen dock.
    let chosenDock = [];

    //Iterate the array of hauling ships
    for (const hauler of haulingShips) {
      //Does the dockId match the dockId of the current hauler?
      if (hauler.dockId === parseInt(dockId)) {
        //Add the matching ships to the chosenDock array
        chosenDock.push(hauler.name);
      }
    }
    /* Check whether the chosenDocks array is empty and create a message for whether 
    or not the dock has ships unloading or not. */
      let shipsAtDock = chosenDock.join("\n- ");

    if (chosenDock.length > 1) {
      window.alert(
        `The ${clickedDock.dataset.city} dock is currently unloading ${chosenDock.length} ships: \n- ${shipsAtDock}`
      );
    } else if ( chosenDock.length === 1) {
        window.alert( `The ${clickedDock.dataset.city} dock is currently unloading ${chosenDock.length} ship: \n - ${shipsAtDock}`
            
        )
    } else if(chosenDock < 1) {
        window.alert(`There are currently ${chosenDock.length} ships being unloaded at the ${clickedDock.dataset.city} dock.`)
    } else (
        window.alert(`Seems like we're lost at sea.`)
    )
  }
});

export const DockList = () => {
  const docks = getDocks();
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
