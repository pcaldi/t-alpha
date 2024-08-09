import { FiTag, FiEdit, FiClipboard } from 'react-icons/fi';
import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Feature } from "../../components/Feature"

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Feature title="Produtos" icon={FiTag} to="/product" />
        <Feature title="Criar" icon={FiClipboard} to="/new-product" />
        <Feature title="Editar" icon={FiEdit} to="/update-product/:id" />
      </main>
    </Container>
  )
}
