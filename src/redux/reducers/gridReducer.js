import { ADD_GRID, GENERATE_GRID } from '../actionTypes';

const initialState = {
  grid: [],
  totalWidthGrid: 0,
};

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GRID: {
      return {
        ...state,
        grid: [...state.grid, action.payload],
        totalWidthGrid:
          state.totalWidthGrid + parseInt(action.payload.columnWidth),
      };
    }
    case GENERATE_GRID: {
      return {
        ...state,
        grid: [...state.grid, action.payload],
      };
    }

    default:
      return state;
  }
};

export default gridReducer;
