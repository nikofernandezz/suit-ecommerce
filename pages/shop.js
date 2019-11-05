import React, { Component } from "react";
import Layout from "../components/clientComponents/Layout";
import ProductCard from "../components/clientComponents/shop/ProductCard";
import Footer from "../components/clientComponents/footer/Footer";
import styled from "styled-components";
import { message } from "antd";
import testData from "../testData";

const MainWrapper = styled.div`
  background: rgb(249, 250, 252);
  overflow-x: hidden;
  width: 100%;
  display: flex;
  padding: 3% 5% 5% 5%;

  .right {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .left {
    padding: 2%;
    margin-top: 1%;
    display: flex;
    height: 100vh;
    width: 300px;
    background: #fff;
    border-color: rgba(0, 0, 0, 0.09);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }
`;

const BackgroundHeader = styled.div`
  background: url("../static/images/shop-cover.jpg");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -200px;
  height: 250px;
`;

class Shop extends Component {
  state = {
    cart: []
  };

  handleAddItemToCart = item => {
    const newCart = [...this.state.cart, item];
    this.setState({
      cart: newCart
    });

    message.success(`You've added ${item.title} to your cart`, 5);
  };
  render() {
    return (
      <Layout>
        <BackgroundHeader />
        <MainWrapper>
          <div className="left">Filter</div>
          <div className="right">
            {testData.map(item => (
              <ProductCard
                item={item}
                addItemToCart={this.handleAddItemToCart}
              />
            ))}
          </div>
        </MainWrapper>
        <Footer />
      </Layout>
    );
  }
}

export default Shop;
