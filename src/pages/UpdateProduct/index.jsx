/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Header, Form } from "./styles";

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"


export function UpdateProduct() {
  const [data, setData] = useState(null)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleEditProduct() {
    const product = {
      name,
      description,
      price: Number(price),
      stock: Number(stock),
    }


    if (price <= 0 || isNaN(price)) {
      return "O preço deve ser um número positivo.";
    }
    if (stock < 0 || isNaN(stock)) {
      return "O estoque deve ser um número positivo.";
    }


    try {
      await api.patch(`/api/products/update-product/${params.id}`, product)

      alert("Produto editado com sucesso!")
      handleBack()

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Erro ao editar o produto. Tente novamente.")
      }
    }

  }


  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o produto?")

    if (confirm) {
      await api.delete(`/api/products/delete-product/${params.id}`)
      handleBack()
    }
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/api/products/get-one-product/${params.id}`)
      setData(response.data.data.product)

      // Inicializando os estados com os dados do produto
      setName(response.data.data.product.name);
      setDescription(response.data.data.product.description);
      setPrice(response.data.data.product.price);
      setStock(response.data.data.product.stock);

    }

    fetchProduct()
  }, [])

  return (
    <Container>
      <Header>
        <h1>Editar</h1>
        <nav>
          <Button title="Voltar" onClick={handleBack} />
          <Button title="Excluir" onClick={handleRemove} />
        </nav>
      </Header>
      {

        data &&
        <Form>
          <Input
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextArea
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <Input
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <Input
            value={stock}
            onChange={e => setStock(e.target.value)}
          />

          <Button title="Salvar" onClick={handleEditProduct} />

        </Form>
      }
    </Container>
  )
}
