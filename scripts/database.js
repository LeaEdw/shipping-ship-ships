/*const database = {
  docks: [
    { id: 1, location: "Shanghai, China", maxCap: "43.5" },
    { id: 2, location: "Busan, South Korea", maxCap: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", maxCap: "14.35" },
    { id: 4, location: "Antwerp, Belgium", maxCap: "12.04" },
    { id: 5, location: "Singapore", maxCap: "37.2" },
  ],
  haulers: [
    { id: 1, name: "Pioneering Spirit", dockId: 1 },
    { id: 2, name: "Boaty McBoatFace", dockId: 2 },
    { id: 3, name: "Seawise Giant", dockId: 2 },
    { id: 4, name: "Pacific Carrier", dockId: 2 },
    { id: 5, name: "Steel Navigator", dockId: 3 },
    { id: 6, name: "Deep Sea Transporter", dockId: 3 },
    { id: 7, name: "Global Shipper", dockId: 4 },
    { id: 8, name: "Ocean Explorer", dockId: 1 },
    { id: 9, name: "Maritime Legend", dockId: 1 },
  ],
  shippingShips: [
    { id: 1, name: "Esso Atlantic", haulerId: 1 },
    { id: 2, name: "Prairial", haulerId: 2 },
    { id: 3, name: "Polaris Royal", haulerId: 3 },
    { id: 4, name: "Rivoli", haulerId: 4 },
    { id: 5, name: "Champs Élysée", haulerId: 5 },
    { id: 6, name: "Ever Ace", haulerId: 6 },
    { id: 7, name: "Nissei Maru", haulerId: 7 },
    { id: 8, name: "MSC Gülsün", haulerId: 1 },
    { id: 9, name: "HMM Rotterdam", haulerId: 2 },
    { id: 10, name: "CMA CGM Trocadero", haulerId: 3 },
  ],
};*/

const database = {
  docks: [
    { id: 1, location: "Shanghai, China", maxCap: "43.5" },
    { id: 2, location: "Busan, South Korea", maxCap: "21.6" },
    { id: 3, location: "Rotterdam, The Netherlands", maxCap: "14.35" },
    { id: 4, location: "Antwerp, Belgium", maxCap: "12.04" },
    { id: 5, location: "Singapore", maxCap: "37.2" },
  ],
  haulers: [
    { id: 1, name: "Pioneering Spirit" },
    { id: 2, name: "Boaty McBoatFace" },
    { id: 3, name: "Seawise Giant" },
    { id: 4, name: "Pacific Carrier" },
    { id: 5, name: "Steel Navigator" },
    { id: 6, name: "Deep Sea Transporter" },
    { id: 7, name: "Global Shipper" },
    { id: 8, name: "Ocean Explorer" },
    { id: 9, name: "Maritime Legend" },
  ],
  shippingShips: [
    { id: 1, name: "Esso Atlantic", haulerId: 1 },
    { id: 2, name: "Prairial", haulerId: 2 },
    { id: 3, name: "Polaris Royal", haulerId: 3 },
    { id: 4, name: "Rivoli", haulerId: 4 },
    { id: 5, name: "Champs Élysée", haulerId: 5 },
    { id: 6, name: "Ever Ace", haulerId: 6 },
    { id: 7, name: "Nissei Maru", haulerId: 7 },
    { id: 8, name: "MSC Gülsün", haulerId: 1 },
    { id: 9, name: "HMM Rotterdam", haulerId: 2 },
    { id: 10, name: "CMA CGM Trocadero", haulerId: 3 },
  ],
  // Junction table connecting docks and haulers
  dockHaulers: [
    // Shanghai, China (id: 1) - services most haulers
    { dockId: 1, haulerId: 1 }, // Pioneering Spirit
    { dockId: 1, haulerId: 2 }, // Boaty McBoatFace
    { dockId: 1, haulerId: 3 }, // Seawise Giant
    { dockId: 1, haulerId: 4 }, // Pacific Carrier
    { dockId: 1, haulerId: 6 }, // Deep Sea Transporter
    { dockId: 1, haulerId: 8 }, // Ocean Explorer
    
    // Busan, South Korea (id: 2) - only services Seawise Giant and Boaty McBoatface
    { dockId: 2, haulerId: 2 }, // Boaty McBoatface
    { dockId: 2, haulerId: 3 }, // Seawise Giant
    
    // Rotterdam, The Netherlands (id: 3) - only services Seawise Giant and Pioneering Spirit
    { dockId: 3, haulerId: 1 }, // Pioneering Spirit
    { dockId: 3, haulerId: 3 }, // Seawise Giant
    
    // Antwerp, Belgium (id: 4) - services several haulers
    { dockId: 4, haulerId: 1 }, // Pioneering Spirit
    { dockId: 4, haulerId: 4 }, // Pacific Carrier
    { dockId: 4, haulerId: 5 }, // Steel Navigator
    { dockId: 4, haulerId: 7 }, // Global Shipper
    { dockId: 4, haulerId: 9 }, // Maritime Legend
    
    // Singapore (id: 5) - services multiple haulers
    { dockId: 5, haulerId: 2 }, // Boaty McBoatface
    { dockId: 5, haulerId: 3 }, // Seawise Giant
    { dockId: 5, haulerId: 5 }, // Steel Navigator
    { dockId: 5, haulerId: 6 }, // Deep Sea Transporter
    { dockId: 5, haulerId: 7 }, // Global Shipper
    { dockId: 5, haulerId: 8 }, // Ocean Explorer
    { dockId: 5, haulerId: 9 }, // Maritime Legend
  ]
};

export const getDocks = () => {
  // This function will created a structured clone and export it.
  return structuredClone(database.docks);
};

export const getHaulingShips = () => {
  // This function will created a structured clone and export it.
  return structuredClone(database.haulers);
};

export const getShippingShips = () => {
  // This function will created a structured clone and export it.
  return structuredClone(database.shippingShips);
};

export const docksAndHaulers = () => {
  //This function will create a structured clone and export it. 
  return structuredClone(database.dockHaulers)
}
