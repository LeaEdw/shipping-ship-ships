import { getShippingShips } from "./database.js"

export const ShipList = () => {
    const docks = getShippingShips()

    let cargoShipsHTML = "<ul>"

    for (const ship of ships) {
        cargoShipsHTML += `<li 
                    data-name="${ship.name}"
                    data-id="${ship.id}"
                    data-haulerForeignKey="${ship.haulerId}">
                            ${ship.name}
                   </li>`;
    }

    cargoShipsHTML += "</ul>"

    return cargoShipsHTML
}