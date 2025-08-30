import { DockList } from "./dock.js";
import { ShipList } from "./cargoShip.js";
import { HaulerList } from "./hauler.js";
import { createSchedule } from "./logs.js";


const mainContainer = document.querySelector("#container");

const applicationHTML = `
<h1>Unified Sailing Coalition</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${ShipList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Hauling Ships</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
    ${createSchedule()}
</article>
`;

mainContainer.innerHTML = applicationHTML;
