import React, { Component } from "react";
import styled from "styled-components";
import { Menu, Icon, Modal, Button, Drawer } from "antd";
import SignInForm from "../registrationForms/SignInForm";
import SignUpForm from "../registrationForms/SignUpForm";
import Cart from "../cart/Cart";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      selected: null,
      drawerVisible: false
    };
  }
  showDrawer = () => {
    this.setState({
      drawerVisible: true
    });
  };
  onClose = () => {
    this.setState({
      drawerVisible: false
    });
  };

  showModal = e => {
    console.log(e);
    this.setState({
      visible: true,
      selected: e.key
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <a href="">Home</a>
          </Menu.Item>
          <Menu.Item key="shop">
            <a href="">Shop</a>
          </Menu.Item>
          <Menu.Item key="customize">
            <a href="">Customize</a>
          </Menu.Item>
          <SubMenu title={<span>User</span>}>
            <MenuItemGroup>
              <Menu.Item key="signIn" onClick={this.showModal}>
                Sign In
              </Menu.Item>

              <Menu.Item key="signUp" onClick={this.showModal}>
                Register
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="cart" onClick={this.showDrawer}>
            <Icon style={{ fontSize: "28px" }} type="shopping-cart" />
          </Menu.Item>
        </Menu>
        <Modal
          key={"test"}
          bodyStyle={{ height: "100%", backgroundColor: "#fff" }}
          centered={true}
          footer={null}
          width={550}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={true}
        >
          {this.state.selected === "signIn" ? (
            <div className="signInWrapper" style={{ padding: "5%" }}>
              <SignInForm />{" "}
              <Button
                style={{ marginTop: "2%" }}
                size="large"
                type="button"
                className="login-form-button"
                block
                key="signUp"
                onClick={this.showModal}
              >
                Dont have an account yet? Register Now!
              </Button>
            </div>
          ) : (
            <SignUpForm />
          )}
        </Modal>
        <Drawer
          width={456}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.drawerVisible}
        >
          <Cart />
        </Drawer>
      </div>
    );
  }
}

export default RightMenu;
