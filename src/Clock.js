import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      width: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      width: this.state.width + 10
    });
  }



  // var i = 0;
  // function move() {
  //   if (i == 0) {
  //     i = 1;
  //     //var elem = document.getElementById("myBar");
  //     var width = 1;
  //     var id = setInterval(frame, 10);
  //     function frame() {
  //       if (width >= 100) {
  //         clearInterval(id);
  //         i = 0;
  //       } else {
  //         width++;
  //         elem.style.width = width + "%";
  //       }
  //     }
  //   }
  // }


  render() {
    return (
      <div>
        <h1>Clock</h1>

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <div id="myProgress">
          <div id="myBar" style={{width: this.state.width}}></div>
        </div>
      </div>
    );
  }
}

export default Clock;
