import React from 'react';

import { connect } from 'react-redux';

import { addItem, removeItem } from '../../redux/actions';
import GridItem from '../grid-item/grid-item.component';
import './display-grid.styles.scss';

const DisplayGrid = (props) => {
  const { grid } = props.grid;

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
          <span className="column-width">
            Column Width: <b>{item.columnWidth}</b>
          </span>

          {item.text.length > 0 ? `And Text is:  ${item.text}` : ''}
        </li>
      );
    });
  }

  return (
    <>
      <ul className="grid"> {renderList()} </ul>
      {props.grid.totalWidthGrid === 12 ? <GridItem /> : ''}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayGrid);
