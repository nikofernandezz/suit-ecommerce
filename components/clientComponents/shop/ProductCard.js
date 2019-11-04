import { Card, Icon, Button, Popconfirm, Select } from "antd";
import styled from "styled-components";

const MainLayout = styled.div`
  .dot {
    position: absolute;
    top: 70%;
    right: 5%;
    height: 45px;
    width: 45px;
    background-color: #607d8b;
    border-radius: 50%;
  }
`;

const ProductCard = props => {
  const { Meta } = Card;
  const { title, price, image } = props.item;

  const renderAddToCartOption = () => {
    const { Option } = Select;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Select Size</span>
        <Select
          defaultValue="lucy"
          style={{ width: "100%" }}
          // onChange={handleChange}
        >
          <Option value="jack">Extra Small</Option>
          <Option value="jacssk">Small</Option>
          <Option value="lucy">Medium</Option>
          <Option value="Yiminghe">Large</Option>
          <Option value="Yimissnghe">Extra Large</Option>
        </Select>
      </div>
    );
  };

  return (
    <MainLayout>
      <Card
        hoverable
        style={{
          width: 240,
          marginTop: "5%",
          borderColor: "rgba(0, 0, 0, 0.09)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)"
        }}
        cover={
          <img
            alt="example"
            src={image}
            style={{
              height: "290px",
              width: 205,
              marginLeft: "7%",
              marginTop: "2%"
            }}
          />
        }
      >
        <Popconfirm
          icon={null}
          title={renderAddToCartOption()}
          onConfirm={() => props.addItemToCart(props.item)}
          okText="Quick Add"
          cancelText={"Cancel"}
        >
          <span className="dot">
            <Icon
              type="shopping-cart"
              style={{
                fontSize: "24px",
                position: "absolute",
                top: "24%",
                left: "20%",
                color: "white"
              }}
            />
          </span>
        </Popconfirm>

        <Meta title={title} description={`Price: ₱${price}`} />
      </Card>
    </MainLayout>
  );
};

export default ProductCard;
