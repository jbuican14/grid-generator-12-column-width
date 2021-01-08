import React, { useState } from 'react';
import { connect } from 'react-redux';

import { generateGrid } from '../../redux/actions';
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

  const list = grid.map((item, idx) => (
    <li key={idx}>
      Column Width: <b>{item.columnWidth}</b> and content is :{' '}
      <b>{item.text}</b>
    </li>
  ));

  return (
    <>
      <ul className="grid"> {list} </ul>
      {list.length > 0 ? (
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
  const { grid } = state;
  return { grid };
};

const mapDispatchToProps = (dispatch) => ({
  generateGrid: (item) => dispatch(generateGrid()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayGrid);
