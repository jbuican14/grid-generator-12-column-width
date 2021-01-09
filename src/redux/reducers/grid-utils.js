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
  let modifiedItems = [...items.grid];
  let newItemToAdd = { ...itemToAdd };
  newItemToAdd.id = new Date().getTime();
  let gridAreaRemaining = 12 - parseInt(itemToAdd.columnWidth);
  let newGridAdded = parseInt(itemToAdd.columnWidth);

  //Check if the remaining area is possible to add
  if (
    itemToAdd.columnWidth === '12' ||
    gridAreaRemaining < modifiedItems.length
  ) {
    return items.grid;
  }

  while (newGridAdded > 0) {
    for (let i = 0; i < modifiedItems.length; i++) {
      if (modifiedItems[i].columnWidth < 1) {
        break;
      }
      if (parseInt(modifiedItems[i].columnWidth) !== 1 && newGridAdded !== 0) {
        modifiedItems[i].columnWidth -= 1;
        newGridAdded--;
      }
      if (newGridAdded === 0) break;
    }
  }

  return [...modifiedItems, newItemToAdd];
};
