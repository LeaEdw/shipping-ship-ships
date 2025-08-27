import { getHaulingShips } from "./database.js"


export const HaulerList = () => {
    const docks = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li 
                    data-name="${hauler.name}"
                    data-id="${hauler.id}"
                    data-docksForeignKey="${hauler.dockId}">
                            ${hauler.name}
                   </li>`;
    }

    haulersHTML += "</ul>"

    return haulersHTML
}