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

  // const remaining = items.grid.filter((item) => item.id !== itemsToRemove.id);
  // console.log('remaining ', remaining);
  // items.totalWidthGrid = items.totalWidthGrid - itemsToRemove.columnWidth;
  // console.log(items.totalWidthGrid, remaining.length); //10
  // let spaceNeed = 12 - items.totalWidthGrid;
  // let newGrid;
  // let leftover;
  // newGrid = spaceNeed / remaining.length;
  // console.log('NEW GRID', newGrid);
  // if (newGrid > 0) {
  //   if (Math.round(newGrid) === newGrid) {
  //     newGrid = Math.floor(spaceNeed / remaining.length);
  //   } else {
  //     newGrid = Math.floor(spaceNeed / remaining.length);
  //     leftover = 1;
  //   }
  //   items.grid.map((item, idx) => {
  //     item.columnWidth = parseInt(item.columnWidth) + newGrid;
  //     if (idx + 1 === remaining.length) {
  //       item.columnWidth = parseInt(item.columnWidth) + leftover;
  //     }
  //   });
  // } else {
  //   items.grid[remaining.length - 1].columnWidth = newGrid;
  // }

  // console.log('RETURN ');
  // console.log(remaining);
  // return remaining;
};

//grid: state.grid.filter((item) => {
//     return item.id !== action.payload.id;
//   }),//
