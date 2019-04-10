// Code your solution here
const findMatching = (array, string) => {
  return array.filter((item) => {
    return item.toLowerCase() === string.toLowerCase();
  });
};

const fuzzyMatch = (array, string) => {
  return array.filter((item) => {
    return item.startsWith(string);
  })
};

const matchName = (array, string) => {
  return array.filter((item) => {
    return item.name === string;
  });
};
