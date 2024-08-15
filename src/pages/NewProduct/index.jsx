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

    if (price <= 0 || isNaN(price)) {
      return alert("O preço deve ser um número positivo.");
    }
    if (stock < 0 || isNaN(stock)) {
      return alert("O estoque deve ser um número positivo.");
    }


    try {


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
          onChange={e => setName(e.target.value)}

        />

        <TextArea
          placeholder="Descrição"
          onChange={e => setDescription(e.target.value)}
        />

        <Input
          placeholder="Preço"
          onChange={e => setPrice(e.target.value)}
        />

        <Input
          placeholder="Quantidade"
          onChange={e => setStock(e.target.value)}
        />

        <Button
          title="Cadastrar"
          onClick={handleNewProduct}
        />

      </Form>
    </Container>
  )
}
