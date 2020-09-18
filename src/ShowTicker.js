import React from 'react';

class ShowTicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      width: 0
    };
  }

  render() {
    return (
      <div>
      <h1>30 Rock</h1>

      <h2>Episode </h2>
      </div>
    );
  }

}

export default ShowTicker;
