import React from 'react';

export default class Buttons extends React.Component {
  render() {
    const { number, clickHandler } = this.props;
    return (
      <button
        className={`btn-${number}, transp`}
        type="button"
        onClick={clickHandler}
        value={number}
      >
        {number}
      </button>
    );
  }
}
