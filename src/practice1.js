const parseData = (input) => {
  const {data, column} = input;

  const firstColumnKeyName = Object.keys(Object.values(column)[0])[0];
  const propertyNameList = [];
  for (let dataName of column) {
    propertyNameList.push(dataName[firstColumnKeyName]);
  }

  const parsedResultList = [];
  for (let valueList of data) {
    let parsedObject = {}
    let propertyIndex = 0;
    for (let value of valueList) {
      parsedObject = {
        ...parsedObject,
        [propertyNameList[propertyIndex++]]: value,
      }
    }
    parsedResultList.push(parsedObject);
  }

  return parsedResultList;
}
export { parseData };
