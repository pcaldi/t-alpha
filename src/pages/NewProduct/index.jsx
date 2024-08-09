import { useState } from "react"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"

import { Container, Header, Form } from "./styles"

import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"

export function NewProduct() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleNewProduct() {
    try {
      const newProduct = {
        name,
        description,
        price: Number(price),
        stock: Number(stock),
      }

      if (!name || !description || !price || !stock) {
        alert("Preencha todos os campos!")
        return
      }

      await api.post("/api/products/create-product", newProduct)
      alert("Produto cadastrado com sucesso!")
      navigate("/")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao cadastrar a conta. Tente novamente.")
      }
    }

  }

  return (
    <Container>
      <Header>
        <h1>Cadastrar</h1>
        <nav>
          <Button title="Voltar" onClick={handleBack} />
        </nav>
      </Header>

      <Form>
        <Input
          placeholder="Produto"
          onChange={e => setName(e.targe.value)}

        />

        <TextArea
          placeholder="Descrição"
          onChange={e => setDescription(e.targe.value)}
        />

        <Input
          placeholder="Preço"
          onChange={e => setPrice(e.targe.value)}
        />
        <Input
          placeholder="Quantidade"
          onChange={e => setStock(e.targe.value)}
        />

        <Button title="Cadastrar" onClick={handleNewProduct} />

      </Form>
    </Container>
  )
}
