import { Container, Header, Form } from "./styles";

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { useNavigate } from "react-router-dom";


export function UpdateProduct() {


  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }


  return (
    <Container>
      <Header>
        <h1>Editar</h1>
        <nav>
          <Button title="Voltar" onClick={handleBack} />
        </nav>
      </Header>

      <Form>
        <Input placeholder="Produto" />
        <TextArea placeholder="Descrição" />
        <Input placeholder="Preço" />
        <Input placeholder="Quantidade" />

        <Button title="Editar" />

      </Form>
    </Container>
  )
}
