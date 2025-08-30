import { getHaulingShips, getShippingShips } from "./database.js";

let cargoShips = getShippingShips();

document.addEventListener("click", (clickEvent) => {
  const clickedHauler = clickEvent.target;

  // Was a hauler list item clicked?

  // Get the id of the hauler clicked
  const haulerId = clickedHauler.dataset.id;
  // Start a counter variable at 0
  let shipsOnHauler = 0;
  // Iterate all of the shipping ships
  if (clickedHauler.classList.contains('hauler-item')) {
    for (const ships of cargoShips) {
      if (ships.haulerId === parseInt(haulerId)) {
        shipsOnHauler++;
      }
    }
    // Does the haulerId foreign key match the id?

    // Increase the counter by 1
    window.alert(`This hauler is carrying ${shipsOnHauler} ships.`);
  }
});

export const HaulerList = () => {
  const haulers = getHaulingShips();

  let haulersHTML = "<ul>";

  for (const hauler of haulers) {
    haulersHTML += `<li 
                    class="hauler-item"
                    data-name="${hauler.name}"
                    data-id="${hauler.id}"
                    data-docksForeignKey="${hauler.dockId}">
                            ${hauler.name}
                   </li>`;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};
