
import { Item } from "../../components/Item";
import { Button } from "../../components/Button";

import { Container, Header, Content } from "./styles";
import { useNavigate } from "react-router-dom";

export function Product() {


  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }


  return (
    <Container>
      <Header>
        <h1>Produtos</h1>
        <nav>
          <Button title="Voltar" onClick={handleBack} />
        </nav>
      </Header>

      <Content>
        <Item
          data={
            {
              item: [
                { id: '1', name: "TV", description: 'Colorida', price: '1299.99', stock: '10' }
              ]
            }
          }
        />
        <Item
          data={
            {
              item: [
                { id: '2', name: "TV", description: 'Colorida', price: '1299.99', stock: '10' }
              ]
            }
          }
        />
        <Item
          data={
            {
              item: [
                { id: '3', name: "TV", description: 'Colorida', price: '1299.99', stock: '10' }
              ]
            }
          }
        />
        <Item
          data={
            {
              item: [
                { id: '4', name: "TV", description: 'Colorida', price: '1299.99', stock: '10' }
              ]
            }
          }
        />
        <Item
          data={
            {
              item: [
                { id: '5', name: "TV", description: 'Colorida', price: '1299.99', stock: '10' }
              ]
            }
          }
        />
        <Item
          data={
            {
              item: [
                { id: '6', name: "TV", description: 'Colorida', price: '1299.99', stock: '10' }
              ]
            }
          }
        />
        <Item
          data={
            {
              item: [
                { id: '7', name: "TV", description: 'Colorida', price: '1299.99', stock: '10' }
              ]
            }
          }
        />




      </Content>
    </Container>
  );
}
