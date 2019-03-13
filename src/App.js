import React, { Component } from 'react';
import MovingLine, { AnimationDirection } from 'react-moving-line';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show1st: true,
      show2nd: false,
    };

    setTimeout(() => {
      this.setState({show1st: true});
      setTimeout(() => {
        this.setState({show2nd: true});
      }, 1600);
    }, 1000);
  }

  render() {
    this.data = [
      {
        content: '<h1>Hello World</h1><p>This is embedded by the parent component</p>',
        directions: [AnimationDirection.Downward, AnimationDirection.Rightward],
        background: 'rgba(172, 218, 253, 1.0)',
        color: '#505050',
      },
      {
        content: '<h1>This is the second container</h1><p>This content is also embedded by the parent component</p>',
        directions: [AnimationDirection.Leftward, AnimationDirection.Upward],
        background: 'rgba(32, 32, 32, 0.8)',
        color: 'rgba(255, 255, 255, 1.0)'
      },
    ]

    return (
      <div className="container">
        <div className="first-content">
          {(() => {
            if (this.state.show1st) {
              return (
                <MovingLine
                  content={this.data[0]['content']}
                  directions={this.data[0]['directions']}
                  background={this.data[0]['background']}
                  color={this.data[0]['color']}>
                </MovingLine>
              );
            }
          })()}
        </div>
        <div className="second-content">
          {(() => {
            if (this.state.show2nd) {
              return (
                <MovingLine
                  content={this.data[1]['content']}
                  directions={this.data[1]['directions']}
                  background={this.data[1]['background']}
                  color={this.data[1]['color']}>
                </MovingLine>
              );
            }
          })()}
        </div>
      </div>
    );
  }
}

export default App;
