import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/cart";

function ProductItem({ product, user }) {
  const dispatch = useDispatch();
  console.log("Пользователь:", product);
  return (
    <Card>
      <Card.Content>
        <Image style={{ marginBottom: 20 }} src={product.image} />
        <Card.Header>{product.title}</Card.Header>
        <Card.Meta>{product.category}</Card.Meta>
        <Card.Description>Description: {product.description}</Card.Description>
        <Card.Description>Price: {product.price}$</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button
            basic
            color="green"
            onClick={() => dispatch(addProductToCart(product.id))}
          >
            Buy
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ProductItem;
