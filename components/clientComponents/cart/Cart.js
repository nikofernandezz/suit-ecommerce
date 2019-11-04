import React from "react";
import styled from "styled-components";
import { Select, Icon, Button } from "antd";

const MainLayout = styled.div`
  height: 98vh;
  padding: 7%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-content: space-between;

  .cartContainer {
    max-height: 520px;
    overflow: auto;
    .cartItem {
      display: flex;
      margin-top: 3%;
    }
  }
  .totalContainer {
    margin-top: 15%;
    .subtotal {
      border-color: #949494;
      border-style: solid;
      border-width: 0.5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3%;
      height: 60px;
      padding: 5%;

      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  #imageRow {
    flex: 1;
    img {
      width: 90px;
    }
  }
  #detailRow {
    height: 100%;
    flex: 3;
    display: flex;
    flex-direction: column;
    align-content: space-around;

    padding-left: 2%;
    .trash {
      font-size: 18px;
      margin-top: 4%;
    }
  }
  #priceRow {
    flex: 1;
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

class Cart extends React.Component {
  state = {};

  handleChange = value => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <MainLayout>
        <heading>
          <h1>Cart</h1>
        </heading>
        <div className="cartContainer">
          <hr />
          <div className="cartItem">
            <div id="imageRow">
              <img src="../../static/images/testShirt.jpg" alt="" />
            </div>
            <div id="detailRow">
              <p>The Avalon Navy Plain Jacket</p>
              <p>Size: Small</p>
              <div>
                QTY:{" "}
                <Select
                  defaultValue="1"
                  style={{ width: 60 }}
                  onChange={this.handleChange}
                >
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                  <Option value="6">6</Option>
                  <Option value="7">7</Option>
                  <Option value="8">8</Option>
                </Select>
              </div>
              <div>
                <Icon type="delete" className="trash" />
              </div>
            </div>
            <div id="priceRow">
              <span>₱7500</span>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div className="subtotal">
            <div className="left">Subtotal :</div>
            <div className="right">
              <span>₱12900</span>
            </div>
          </div>
          <div className="checkout">
            <Button
              style={{
                backgroundColor: "green",
                borderColor: "green",
                borderRadius: "0px"
              }}
              type="primary"
              block
              size="large"
            >
              Review and Check Out
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Cart;
