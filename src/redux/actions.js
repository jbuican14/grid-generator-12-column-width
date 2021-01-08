import { ADD_GRID, GENERATE_GRID } from './actionTypes';

export const addGrid = (widthAndText) => ({
  type: ADD_GRID,
  payload: widthAndText,
});
export const generateGrid = () => ({
  type: GENERATE_GRID,
});
