import React from "react";
import Shuriken from "../../Assets/star.png";
import "./Loading.css";
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Loading">
        <img src={Shuriken} alt="" className="Star" />
      </div>
    );
  }
}

export default Loading;
