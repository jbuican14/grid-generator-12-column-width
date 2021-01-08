import { ADD_GRID, GENERATE_GRID, REMOVE_ITEM, ADD_ITEM } from '../actionTypes';
import { removeGridItem } from './grid-utils';

const initialState = {
  grid: [],
  totalWidthGrid: 0,
  updatedGrid: false,
};

const gridReducer = (state = initialState, action) => {
  console.log('add grid', action.payload);
  switch (action.type) {
    case ADD_GRID: {
      action.payload.id = new Date().getTime();
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

    case REMOVE_ITEM: {
      if (state.grid.columnWidth === '12' || state.grid.length === 1) {
        return {
          ...state,
          error: 'Cannot remove the last element',
          updatedGrid: false,
        };
      } else {
        return {
          ...state,
          error: '',
          grid: removeGridItem(state, action.payload),
        };
      }
    }

    case ADD_ITEM: {
      if (state.grid.columnWidth === '12') {
        return {
          ...state,
          error: 'Item cannot be added',
          updatedGrid: false,
        };
      } else {
        console.log(action.payload);
      }
      return {
        ...state,
        updatedGrid: true,
      };
    }

    default:
      return state;
  }
};

export default gridReducer;

// return {
//   ...state,
//   error: '',
//   grid: state.grid.filter((item) => {
//     return item.id !== action.payload.id;
//   }),
//   updatedGrid: true,
// };
