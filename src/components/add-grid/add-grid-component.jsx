import React from 'react';
import { connect } from 'react-redux';

import { addGrid } from '../../redux/actions';
import './add-grid.styles.scss';

class AddGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnWidth: '12',
      text: '',
      err: false,
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state.columnWidth.length === 0);
    if (this.state.columnWidth.length === 0) {
      this.setState({ err: true });
      return;
    }
    this.props.addGrid(this.state);
    this.setState({ columnWidth: '', text: '', err: false });
  };

  updateInput = (text) => {
    this.setState({ text });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="grid-form">
          <label>Grid Column Width:</label>
          {this.state.err ? (
            <span style={{ color: 'red' }}>
              Please provide a grid width between 1-12
            </span>
          ) : (
            ''
          )}
          <br />
          <input
            className="columnWidth"
            type="number"
            min="1"
            max="12"
            value={this.state.columnWidth}
            placeholder="Grid Column Width between 1 - 12"
            onChange={(e) => this.setState({ columnWidth: e.target.value })}
          />
          <input
            type="text"
            value={this.state.text}
            placeholder="Text *optional"
            onChange={(e) => this.setState({ text: e.target.value })}
          />
          <input type="submit" value="Add Grid" className="form-btn" />
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addGrid: (item) => dispatch(addGrid(item)),
});

export default connect(null, mapDispatchToProps)(AddGrid);
