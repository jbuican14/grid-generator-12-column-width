import { ADD_GRID, GENERATE_GRID, REMOVE_ITEM, ADD_ITEM } from './actionTypes';

export const addGrid = (widthAndText) => ({
  type: ADD_GRID,
  payload: widthAndText,
});
export const generateGrid = () => ({
  type: GENERATE_GRID,
});
export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
