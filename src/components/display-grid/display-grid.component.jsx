import React, { useState } from 'react';
import { connect } from 'react-redux';

import { generateGrid, addItem, removeItem } from '../../redux/actions';
import GridItem from '../grid-item/grid-item.component';
import './display-grid.styles.scss';

const DisplayGrid = (props) => {
  const [isvalidatedGrid, setIsValidatedGrid] = useState(null);
  const { grid } = props.grid;

  const validateGrid = () => {
    const totalColumn = grid.reduce((acc, current) => {
      return acc + parseInt(current.columnWidth);
    }, 0);
    totalColumn === 12 ? setIsValidatedGrid(true) : setIsValidatedGrid(false);
  };

  function renderList() {
    return grid.map((item) => {
      return (
        <li key={item.id} className="list-item">
          <div className="remove-button" onClick={() => props.removeItem(item)}>
            &#10005;
          </div>
          <div className="add-button" onClick={() => props.addItem(item)}>
            &#10003;
          </div>
          Column Width: <b>{item.columnWidth}</b>
          {item.text.length > 0 ? `And Text is ${item.text}` : ''}
        </li>
      );
    });
  }

  return (
    <>
      <ul className="grid"> {renderList()} </ul>
      {grid.length > 0 || isvalidatedGrid ? (
        <button className="grid-generator-btn" onClick={validateGrid}>
          Generate Grid
        </button>
      ) : (
        ''
      )}

      {isvalidatedGrid ? <GridItem /> : ''}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  generateGrid: (item) => dispatch(generateGrid()),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayGrid);
