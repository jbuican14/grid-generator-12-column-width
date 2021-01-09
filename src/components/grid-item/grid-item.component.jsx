import React from 'react';
import { connect } from 'react-redux';

const GridItem = (props) => {
  const { grid } = props.grid;

  function rendergridHTML() {
    return grid.map((item, idx) => {
      return (
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
            <div>Width:{item.columnWidth}</div>
            <div className="text">
              {item.text ? item.text : `Column ${parseInt(idx) + 1}`}
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="container-wrapper">
      <div className="container">
        <p>Grid</p>
        <div className="row">{rendergridHTML()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { grid } = state;
  return { grid };
};
export default connect(mapStateToProps)(GridItem);
