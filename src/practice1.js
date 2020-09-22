// TODO 方法体过长，思考一下可否优化
const parseData = (input) => {
  // TODO 解构可以优化到函数接受参数中
  const {data, column} = input;

  // TODO 这里‘name’可以认为是固定的key值，这属于前后端约定的一部分，所以不需要 firstColumnKeyName
  const firstColumnKeyName = Object.keys(Object.values(column)[0])[0];
  // TODO 使用map做数组与数组的转化，不用声明新数组
  const propertyNameList = [];
  for (let dataName of column) {
    propertyNameList.push(dataName[firstColumnKeyName]);
  }

  const parsedResultList = [];
  for (let valueList of data) {
    let parsedObject = {}
    // 不用重新声明 index，使用valueList.entries或forEach
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
