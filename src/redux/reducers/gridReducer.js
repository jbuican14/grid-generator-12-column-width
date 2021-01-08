import { ADD_GRID, GENERATE_GRID } from '../actionTypes';

const initialState = {
  grid: [],
};

const gridReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GRID: {
      return {
        ...state,
        grid: [...state.grid, action.payload],
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
