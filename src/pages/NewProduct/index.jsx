
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"

import { Container, Header, Form } from "./styles";
import { useNavigate } from "react-router-dom";

export function NewProduct() {

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
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
        <Input placeholder="Produto" />
        <TextArea placeholder="Descrição" />
        <Input placeholder="Preço" />
        <Input placeholder="Quantidade" />

        <Button title="Cadastrar" />

      </Form>
    </Container>
  )
}
