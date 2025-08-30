import { DockList } from "./dock.js";
import { ShipList } from "./cargoShip.js";
import { HaulerList } from "./hauler.js";


const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Unified Sailing Coalition</h1>
<article class="details">
    <section class="detail--column list details__ships">
        <h2>Shipping Ships</h2>
        ${ShipList()}
    </section>
    <section class="detail--column list details__haulers">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>


`;

mainContainer.innerHTML = applicationHTML;
