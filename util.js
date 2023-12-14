module.exports = {
  getFilteredObj: (obj) => {
    const newObj = { ...obj };
    Object.keys(newObj).forEach((key) => {
      if (newObj[key] === undefined || newObj[key] === "") delete newObj[key];
    });
    return newObj;
  },
};
