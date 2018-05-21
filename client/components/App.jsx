import React from 'react';
import MainScene from '../3d/MainScene';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.mainScene = new MainScene(this.canvas.current);
    this.mainScene.addDonut(0, 0, 0);
    this.mainScene.addDonut(10, 10, 0);
  }

  handleClick(e) {
    const text = prompt('Node Text:');
    this.mainScene.addNodeAtWindow(text, e.clientX, e.clientY);
  }

  render() {
    return <canvas ref={this.canvas} onClick={e => this.handleClick(e)} />;
  }
}

export default App;
