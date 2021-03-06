import React, { Component } from "react";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false
  };
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <nav className="menuBar">
          <div className="logo">
            <a href="" style={{ color: "#1d1d1d" }}>
              Sir Shallum
            </a>
          </div>
          <div className="menuCon">
            <div className="rightMenu">
              <RightMenu />
            </div>
            <Button
              className="barsMenu"
              type="primary"
              onClick={this.showDrawer}
            >
              <span className="barsBtn"></span>
            </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <RightMenu />
            </Drawer>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
