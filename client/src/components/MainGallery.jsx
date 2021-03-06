// file for Main display gallery component

import React from "react";
import RightArrow from "./RightArrow.jsx";
import LeftArrow from "./LeftArrow.jsx";

class MainGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.display !== this.props.display) {
      this.setState({
        display: this.props.display
      });
      console.log("display set to: ", this.state.display);
    }
  }
  render() {
    return (
      <div className="displayWrap">
        <div className="mainImage">
          <img src={this.state.display}></img>
        </div>
      </div>
    );
  }
}

export default MainGallery;
