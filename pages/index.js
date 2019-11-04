import Layout from "../components/clientComponents/Layout";
import Footer from "../components/clientComponents/footer/Footer";
import styled from "styled-components";
import { Button, Icon, Input } from "antd";
import Link from "next/link";

const Cover = styled.div`
  width: 100%;
  height: 85vh;
  background: url("../../static/images/cover.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .cover-container {
    height: 60vh;
    /* background: red;
    opacity: 0.5; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 6%;
    margin-right: 5.5%;

    .cover-button-container {
      display: flex;
      justify-content: space-around;
      width: 430px;

      .coverButton:hover {
        background: #fff;
        color: #1d1d1d;
      }
    }
  }

  h1 {
    color: #1d1d1d;
    font-size: 6em;
    font-family: "Anton", sans-serif;
  }

  h2 {
    color: #1d1d1d;
    margin-top: -3%;
    margin-bottom: 2%;
  }
`;

const Section1 = styled.div`
  /* background: rgb(249, 250, 252); */
  background: #fff;
  padding: 5%;
  h3 {
    font-family: "Anton", sans-serif;
  }

  button:hover {
    background: #fff;
    color: #1d1d1d;
    border: 0px;
  }

  .tile-1 {
    width: 100%;
    display: flex;
    justify-content: center;
    .left {
      flex: 3;

      img {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .right {
      background: #f5f7fa;
      flex: 1;
      padding: 2.6%;
      text-align: center;
      button {
        margin-top: 5%;
      }
      h3 {
        color: #1d1d1d;
        font-size: 3em;
      }
      h4 {
        margin-top: -5%;
      }
    }
  }

  .tile-2 {
    margin-top: 4%;

    width: 100%;
    display: flex;
    justify-content: center;

    .left {
      flex: 1;
      background: #f5f7fa;
      padding: 3.8%;
      text-align: center;

      h3 {
        color: #1d1d1d;
        font-size: 2.6em;
      }
    }

    .right {
      flex: 3;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const Section2 = styled.div`
  background: #f5f7fa;
  border-bottom: 1px solid #dfdfdf;
  border-top: 1px solid #dfdfdf;
  height: 40vh;
  margin-bottom: 5%;
  h1 {
    text-align: center;
    margin-top: 3%;
    margin-bottom: 2%;
  }
  .box-container {
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin-left: 10%;

    .box-wrapper {
      background: #fff;
      height: 140px;
      width: 260px;
      text-align: center;
      border: 1px solid #dfdfdf;
      padding-top: 1%;

      h4 {
        margin-top: 2%;
      }
    }
  }
`;

const Section3 = styled.div`
  background: url("../../static/images/cover2.jpg");
  height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 7%;
  h1 {
    font-family: "Anton", sans-serif;
  }

  .subscribe-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    height: 60vh;
    margin-left: 6%;

    text-align: center;
    input {
      border-radius: 0px;
      height: 50px;
      margin-bottom: 2%;
    }

    button {
      background: #1d1d1d;
      color: white;
      border: 0px;
      padding-top: 2%;
      border-radius: 0px;
      height: 50px;
    }

    button:hover {
      background: #fff;
      color: #1d1d1d;
    }
    h1 {
      font-size: 2.9em;
      margin-bottom: 1%;
    }

    span {
      margin-bottom: 2%;
    }
  }
`;

const StyledCoverButton = styled(Button)`
  color: white;
  background: #1d1d1d;
  border: 0px;
  font-size: 1.4em;
  padding: 3% 13% 10% 12%;
  border-radius: 0px;
`;

const StyledShopButton = styled(Button)`
  padding: 3% 13% 10% 12%;
  background: #1d1d1d;
  color: white;
  border-radius: 0px;
  margin-bottom: 5%;
`;
const Index = () => {
  return (
    <Layout>
      <Cover>
        <div className="cover-container">
          <h1>Suit Yourself</h1>
          <h2>Tailored Suits and Barong Since 1997</h2>
          <div className="cover-button-container">
            <StyledCoverButton className="coverButton" size="large">
              Go To Shop
            </StyledCoverButton>

            <StyledCoverButton className="coverButton" size="large">
              <Link href="/customize">Customize</Link>
            </StyledCoverButton>
          </div>
        </div>
      </Cover>

      <Section1>
        <div className="tile-container">
          <div className="tile-1">
            <div className="left">
              <img src={"../../static/images/tile-1.jpg"} alt="" />
            </div>
            <div className="right">
              <h3>Corporate Attire Collection</h3>
              <h4>When professionals look good they feel good</h4>
              <StyledShopButton className="coverButton">
                Shop Now
              </StyledShopButton>
            </div>
          </div>
          <div className="tile-2">
            <div className="left">
              <h3>Make your wedding extra special</h3>

              <StyledShopButton className="coverButton">
                Shop Now
              </StyledShopButton>

              <hr></hr>
            </div>
            <div className="right">
              <img src={"../../static/images/tile-2.jpg"} alt="" />
            </div>
          </div>
        </div>
      </Section1>

      <Section2>
        <h1>What we can do for you?</h1>

        <div className="box-container">
          <div className="box-wrapper">
            <Icon
              type="bg-colors"
              style={{ fontSize: "80px", color: "	#C0C0C0" }}
            />
            <h4>Online Customization</h4>
          </div>
          <div className="box-wrapper">
            <Icon type="car" style={{ fontSize: "80px", color: "	#C0C0C0" }} />
            <h4>Delivered To Your Door</h4>
          </div>
          <div className="box-wrapper">
            <Icon
              type="scissor"
              style={{ fontSize: "80px", color: "	#C0C0C0" }}
            />
            <h4>Altering and Resizing</h4>
          </div>{" "}
          <div className="box-wrapper">
            <Icon type="home" style={{ fontSize: "80px", color: "	#C0C0C0" }} />
            <h4>Walk In Repair</h4>
          </div>
        </div>
      </Section2>

      <Section3>
        <div className="subscribe-container">
          <h1>Subscribe to our newsletter</h1>
          <span>Get the latest news, sale and other rewards</span>
          <Input placeholder="Enter your email address" required></Input>
          <Button>SUBSCRIBE</Button>
        </div>
      </Section3>
      <Footer />
    </Layout>
  );
};

export default Index;
