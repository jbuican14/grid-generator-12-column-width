export const removeGridItem = (items, itemToRemove) => {
  console.log('UTIL class');
  console.log(items);
  console.log(itemToRemove);
  const remaining = items.grid.filter((item) => {
    return item.id !== itemToRemove.id;
  });

  let gap = parseInt(itemToRemove.columnWidth);
  console.log('GAP NOW IS ', gap, remaining.length);
  let extraWidthToAdd = gap / remaining.length;
  let leftOver = 0;

  console.log('EXTRA WIDTH NEED ', extraWidthToAdd);
  if (extraWidthToAdd > 0) {
    if (Math.round(extraWidthToAdd) !== extraWidthToAdd) {
      leftOver = 1;
    }
    extraWidthToAdd = Math.floor(extraWidthToAdd);
  }
  console.log('EXTRA WIDTH Now ', extraWidthToAdd, 'left over ', leftOver);

  const output = remaining.map((item, idx) => {
    item.columnWidth = parseInt(item.columnWidth) + extraWidthToAdd;
    if (idx + 1 === remaining.length) {
      item.columnWidth = parseInt(item.columnWidth) + leftOver;
    }
    return item;
  });

  return output;
};

//grid: state.grid.filter((item) => {
//     return item.id !== action.payload.id;
//   }),//
