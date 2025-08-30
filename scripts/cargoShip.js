import { getShippingShips, getHaulingShips } from "./database.js";

let haulers = getHaulingShips();

document.addEventListener("click", (clickEvent) => {
  const clickedShip = clickEvent.target;

  // Was a shipping ship list item clicked?
  if (clickedShip.classList.contains("ship-item")) {

    // Get the haulerId value of the shipping ship clicked
    const haulerId = clickedShip.dataset.haulerforeignkey;

    // Define a default object for the found hauler
    let haulingShip = { name: "Incorrect" };

    // Iterate the array of hauler objects
    for (const hauler of haulers) {
      // Does the haulerId foreign key match the id of the current hauler?
      if (hauler.id === parseInt(haulerId)){
         // Reassign the value of `haulingShip` to the current hauler
         haulingShip = { name: `${hauler.name}`}
      }}
      // Show an alert to the user with this format...
      // Palais Royal is being hauled by Seawise Giant
      window.alert(`${clickedShip.dataset.name} is being hauled by ${haulingShip.name}.`)
    
  }
});

export const ShipList = () => {
  const ships = getShippingShips();

  let cargoShipsHTML = "<ul>";

  for (const ship of ships) {
    cargoShipsHTML += `<li 
                    class="ship-item"
                    data-name="${ship.name}"
                    data-id="${ship.id}"
                    data-haulerForeignKey="${ship.haulerId}">
                            ${ship.name}
                   </li>`;
  }

  cargoShipsHTML += "</ul>";

  return cargoShipsHTML;
};
