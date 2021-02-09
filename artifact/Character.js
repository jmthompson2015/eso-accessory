const Character = {
  FRAK_LOCK: "frak lock",
  KALED_LOCK: "kaled lock",
  KAMELION_LOCK: "kamelion lock",
  MELKUR_LOCK: "melkur lock",
  TRAKEN_LOCK: "traken lock",
  ZAREK_LOCK: "zarek lock",
};

Character.properties = {
  "frak lock": {
    name: "Frak Lock",
    key: "frak lock",
  },
  "kaled lock": {
    name: "Kaled Lock",
    key: "kaled lock",
  },
  "kamelion lock": {
    name: "Kamelion Lock",
    key: "kamelion lock",
  },
  "melkur lock": {
    name: "Melkur Lock",
    key: "melkur lock",
  },
  "traken lock": {
    name: "Traken Lock",
    key: "traken lock",
  },
  "zarek lock": {
    name: "Zarek Lock",
    key: "zarek lock",
  },
};

Character.keys = () => Object.keys(Character.properties);

Character.values = () => Object.values(Character.properties);

Object.freeze(Character);

export default Character;
