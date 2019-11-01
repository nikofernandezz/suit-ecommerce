import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const FooterLayout = styled.div`
  background: yellow;
  height: 50vh;
  display: flex;
  flex-direction: column;
  .top-footer {
    background: #fff;
    height: 43vh;
    border-top: 1px solid lightgrey;
    padding: 5% 10% 5% 10%;
    .content-container {
      display: flex;
      justify-content: space-around;
    }
  }
  h1 {
    font-family: "Anton", sans-serif;
  }
  .bottom-footer {
    background: #f3f3f3;
    padding-left: 10%;
    padding-top: 1.2%;
    padding-right: 10%;
    height: 9vh;

    .content-container {
      display: flex;
      justify-content: space-between;
    }
  }
`;

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <FooterLayout>
        <div className="top-footer">
          <div className="content-container">
            <div className="c1">
              <h1>Sir Shallum</h1>
            </div>
            <div className="c2">
              <ul>
                <h2>Navigation</h2>
                <li>
                  <a href="">
                    <h4>Home</h4>
                  </a>{" "}
                </li>
                <li>
                  <a href="">
                    <h4>Shop</h4>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h4>Customize</h4>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h4>Contact Us</h4>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h4>Cart</h4>
                  </a>
                </li>
              </ul>
            </div>
            <div className="c3">
              <ul>
                <ul>
                  <h2>Services</h2>
                  <li>
                    <h4>Online Customization</h4>
                  </li>
                  <li>
                    <h4>Altering and Resizing</h4>
                  </li>
                  <li>
                    <h4>Walk In Repairs</h4>
                  </li>
                  <li>
                    <h4>1 on 1 Consultation</h4>
                  </li>
                  <li>
                    <h4>Home Delivery</h4>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="c4">
              <h2>Contact Us</h2>
              <span>Del Monte Avenue, Araw St. 1120, Quezon City </span>
              <br />
              <span>(63) 949-769-2393 </span>
              <br />
              <span>SirShallumTailor@gmail.com </span>
              <br />
              <span>Monday - Saturday: 7:00 AM to 9:00 PM</span>
              <br />
              <br />
              <span>
                <a href="">
                  <Icon
                    type="facebook"
                    style={{
                      fontSize: "3em",
                      color: "#1877f2",
                      marginRight: "3%"
                    }}
                  />
                </a>
              </span>
              <span>
                <a href="">
                  <Icon
                    type="twitter"
                    style={{
                      fontSize: "3em",
                      color: "lightblue"
                    }}
                  />
                </a>
              </span>
              <span>
                <a href="">
                  {" "}
                  <Icon
                    type="instagram"
                    style={{
                      fontSize: "3em",
                      color: "#c32aa3"
                    }}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="content-container">
            <h4>Copyright Sir Shallum 2019</h4>
            <h4>Made by: me</h4>
          </div>
        </div>
      </FooterLayout>
    );
  }
}

export default Footer;
