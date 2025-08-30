const database = {
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
