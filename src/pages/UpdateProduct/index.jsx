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

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/api/products/get-one-product/${params.id}`)
      setData(response.data.data.product)
    }

    fetchProduct()
  }, [])

  return (
    <Container>
      <Header>
        <h1>Editar</h1>
        <nav>
          <Button title="Voltar" onClick={handleBack} />
          <Button title="Excluir" onClick={handleBack} />
        </nav>
      </Header>
      {

        data &&
        <Form>
          <Input value={data.name} />
          <TextArea value={data.description} />
          <Input value={data.price} />
          <Input value={data.stock} />

          <Button title="Salvar" />

        </Form>
      }
    </Container>
  )
}
