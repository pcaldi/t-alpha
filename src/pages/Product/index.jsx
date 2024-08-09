import { useState, useEffect } from "react"
import { Item } from "../../components/Item"
import { Button } from "../../components/Button"

import { Container, Header, Content } from "./styles"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function Product() {
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleDetails(id) {
    navigate(`/update-product/${id}`)
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get("/api/products/get-all-products")
      setProducts(response.data.data.products)
    }

    fetchProduct()
  }, [])

  return (
    <Container>
      <Header>
        <h1>Produtos</h1>
        <nav>
          <Button title="Voltar" onClick={handleBack} />
        </nav>
      </Header>

      <Content>
        {
          products.length > 0 &&
          products.map((product) => (
            <Item
              key={String(product.id)}
              data={product}
              onClick={() => handleDetails(product.id)}
            />
          ))
        }

      </Content>
    </Container>
  );
}
