const Quality = {
  NORMAL: "normal",
  FINE: "fine",
  SUPERIOR: "superior",
  EPIC: "epic",
  LEGENDARY: "legendary",
};

Quality.properties = {
  normal: {
    name: "1 Normal",
    color: "Gainsboro",
    key: "normal",
  },
  fine: {
    name: "2 Fine",
    color: "LimeGreen",
    key: "fine",
  },
  superior: {
    name: "3 Superior",
    color: "RoyalBlue",
    key: "superior",
  },
  epic: {
    name: "4 Epic",
    color: "DarkOrchid",
    key: "epic",
  },
  legendary: {
    name: "5 Legendary",
    color: "orange",
    key: "legendary",
  },
};

Quality.keys = () => Object.keys(Quality.properties);

Quality.values = () => Object.values(Quality.properties);

Object.freeze(Quality);

export default Quality;
