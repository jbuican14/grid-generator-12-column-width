import React, { useState } from 'react';
import { connect } from 'react-redux';

import { generateGrid } from '../../redux/actions';
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

  const gridHTML = grid.map((item, idx) => (
    <div
      key={idx}
      style={{
        gridColumnEnd: `span ${item.columnWidth}`,
        height: 'auto',
        border: '1px solid #777',
      }}
    >
      <div className="text-wrapper">
        <h5>Column</h5>
        <div>Width: {item.columnWidth}</div>
        <div className="text">
          {item.text ? item.text : `Column ${idx + 1}`}
        </div>
      </div>
    </div>
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

      {isvalidatedGrid ? (
        <div className="container-wrapper">
          <div className="container">
            <p>Grid</p>
            <div className="row">{gridHTML}</div>
          </div>
        </div>
      ) : (
        ''
      )}
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
