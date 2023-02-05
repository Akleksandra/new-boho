import React from "react";

const withMousePosition = (WrappedComponent) => {
  class Hoc extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

<<<<<<< HEAD
    componentDidMount() {
      document.body.addEventListener(
        "mousemove",
        this.updateMousePosition.bind(this)
      );
=======
    componentDidMount (){
      document.body.addEventListener(
        "mousemove",
         this.updateMousePosition.bind(this)
         );
>>>>>>> de3298250e55803d9c089b751f3d9a33473956cb
    }

    updateMousePosition(e) {
      this.setState({
        x: e.pageX,
        y: e.pageY
      })
      console.log(e);
    }
    render() {
      return (
<<<<<<< HEAD
        <WrappedComponent
          mouseX={this.state.x}
          mouseY={this.state.y}
          {...this.props} />
=======
        <WrappedComponent mouseX={this.state.x} mouseY={this.state.y} {...this.props} />
>>>>>>> de3298250e55803d9c089b751f3d9a33473956cb
      );
    }
  }
  return Hoc;
}

export default withMousePosition;
