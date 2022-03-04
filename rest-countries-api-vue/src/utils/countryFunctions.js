export const getFlag = (flags) => {
  for (const key in flags) {
    return flags[key];
  }
};

export const getNativeName = (name) => {
  const nativeName = name.nativeName;
  const key = Object.getOwnPropertyNames(nativeName)[0];
  return nativeName[key].common;
};

export const getCurrencies = (currencies) => {
  const data = [];
  for (const key in currencies) {
    data.push(currencies[key].name);
  }
  return data;
};
