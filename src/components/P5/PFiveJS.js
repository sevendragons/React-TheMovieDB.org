import React, {Component} from 'react'
import PropTypes from 'prop-types'
import p5 from 'p5'

class GameBox extends React.Component {
  constructor(){
    super();
    this.renderRef = new React.createRef()
    this.inputRef = new React.createRef()
  }

  render() {

    return (
      <div className="GameBox">
        <div ref={this.renderRef}></div>
        <input ref={this.inputRef}
               value={this.props.x}
               onChange={this.inputChanged.bind(this)}/>
        <input ref={this.inputRef}
               value={this.props.y}
               onChange={this.inputChanged.bind(this)}/>
      </div>
    );
  }

  inputChanged() {
    console.log(this.inputRef.current.value);
    const val = this.inputRef.current.value;
    this.setState({
      y: val
    })
  }

  componentDidMount() {
    const { width, height } = this.props
    this.sketch = new p5( sketch => {

      sketch.setup = () => {
        sketch.createCanvas( width, height)
        .parent(this.renderRef.current) ;

      };

      sketch.draw = () => {
        sketch.background(0);
        sketch.fill(255);
        sketch.rect(this.props.x, this.props.y, 50, 50);
      };
    });

  }

}

class PFiveJS extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      y: -30,
      w: 300,
      h: 400
    }

  }

  componentDidMount() {


    setTimeout( () =>
        setInterval( () => {
          this.setState({
            y:
            (this.state.y + 1 > this.state.h + 50) ? -50 : this.state.y + 1
          }) ,10
        }), 1000)
  }

  render () {
    this.inputRef = React.createRef()

    const {x, y, h, w } = this.state

    return(
      <div>
        <div className="renderTarget" style={{textAlign:'center', marginTop: '16px'}} ref={this.renderRef}>
          <GameBox width={w} height={h/2} x={x} y={y}></GameBox>
          <GameBox width={w} height={h/2} x={x} y={y-200 - 30}></GameBox>

        </div>
      </div>
    )
  }
}

export default PFiveJS;
