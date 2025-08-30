import { getDocks } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li 
                    data-city="${dock.location}"
                    data-id="${dock.id}"
                    data-capacity="${dock.maxCap}">
                            ${dock.location} can hold ${dock.maxCap} million tons of cargo.
                   </li>`;
    }

    docksHTML += "</ul>"

    return docksHTML
}