import React from 'react';
import { connect } from 'react-redux';

const GridItem = (props) => {
  const { grid } = props.grid;

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
    <div className="container-wrapper">
      <div className="container">
        <p>Grid</p>
        <div className="row">{gridHTML}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { grid } = state;
  return { grid };
};
export default connect(mapStateToProps)(GridItem);
