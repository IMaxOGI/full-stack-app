import React from "react";
import { useSelector } from "react-redux";
import { Container, Card } from "semantic-ui-react";
import ProductItem from "../components/ProductItem";
import { getUsers, getUsersLoading } from "../redux/selectors/products";
import DimmerLoader from "../components/DrimmerLoader";

function Users() {
  const users = useSelector(getUsers);
  const isLoading = useSelector(getUsersLoading);
  return (
    <Container>
      <DimmerLoader active={isLoading} />
      <Card.Group>
        {users.map((user) => (
          <ProductItem key={user.id} user={user} />
        ))}
      </Card.Group>
    </Container>
  );
}

export default Users;
