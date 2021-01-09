export const removeGridItem = (items, itemToRemove) => {
  const remaining = items.grid.filter((item) => {
    return item.id !== itemToRemove.id;
  });

  let gap = parseInt(itemToRemove.columnWidth);
  let extraWidthToAdd = gap / remaining.length;
  let leftOver = 0;
  if (extraWidthToAdd > 0) {
    if (Math.round(extraWidthToAdd) !== extraWidthToAdd) {
      leftOver = 1;
    }
    extraWidthToAdd = Math.floor(extraWidthToAdd);
  }
  const output = remaining.map((item, idx) => {
    item.columnWidth = parseInt(item.columnWidth) + extraWidthToAdd;
    if (idx + 1 === remaining.length) {
      item.columnWidth = parseInt(item.columnWidth) + leftOver;
    }
    return item;
  });
  return output;
};

/////////////////////////////
export const addGridItem = (items, itemToAdd) => {
  console.log('[ADD] items are ', items);

  let modifiedItems = [...items.grid];
  let newItemToAdd = { ...itemToAdd };
  newItemToAdd.id = new Date().getTime();
  let gridAreaRemaining = 12 - parseInt(itemToAdd.columnWidth);
  let extraWidthToReduce = gridAreaRemaining / modifiedItems.length;
  let newGridAdded = parseInt(itemToAdd.columnWidth);

  console.log('modifiedItems, gridAreaRemaining');
  console.log(modifiedItems, gridAreaRemaining);
  //Check if the remaining area is possible to add
  if (
    itemToAdd.columnWidth === '12' ||
    gridAreaRemaining < modifiedItems.length
  ) {
    console.log('return');
    return items.grid;
  }

  while (newGridAdded > 0) {
    console.log('New While Loop', 'newGridAdded', newGridAdded);
    for (let i = 0; i < modifiedItems.length; i++) {
      console.log('modifiedItems[i].columnWidth', modifiedItems[i].columnWidth);
      if (modifiedItems[i].columnWidth < 1) {
        break;
      }
      if (parseInt(modifiedItems[i].columnWidth) !== 1 && newGridAdded !== 0) {
        console.log('modifiedItems');
        modifiedItems[i].columnWidth -= 1;
        newGridAdded--;
      }
      if (newGridAdded === 0) break;
      console.log(' ------- NEW VALUE ---------', newGridAdded);
      console.log(modifiedItems[i].columnWidth);
    }
  }

  return [...modifiedItems, newItemToAdd];
};

/*
let currentTotalWidth = items.grid.reduce((acc, curr) => {
    console.log('CURRENT ', curr);
    return parseInt(curr.columnWidth) + acc;
  }, 0);
  console.log('TOTAL ', currentTotalWidth);


   extraWidthToReduce = gapNeedToAdd / items.grid.length;

  console.log('EXTRA WIDTH NEED ', extraWidthToReduce);


  extraWidthToReduce = Math.round(extraWidthToReduce);
  if (extraWidthToReduce < 0) extraWidthToReduce = 1;


  let remainingItems = modifiedItems
    .filter((item) => {
      return parseInt(item.columnWidth) !== 1;
    })
    .filter((item) => {
      return parseInt(item.columnWidth) > extraWidthToReduce;
    })
  
    if(remainingItems.length > gapNeedToAdd  ) {
      
    }

*/
