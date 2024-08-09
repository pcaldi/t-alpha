import { FiTag, FiEdit, FiClipboard, FiLogOut } from 'react-icons/fi';
import { Container, Content } from "./styles"

import { Feature } from "../../components/Feature"
import { useAuth } from '../../hooks/auth';

export function Home() {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }


  return (
    <Container>
      <Content>
        <h1>Menu</h1>
        <button type="button" onClick={handleLogout} >
          <FiLogOut size={24} />
        </button>
      </Content>
      <main>
        <Feature title="Produtos" icon={FiTag} to="/product" />
        <Feature title="Criar" icon={FiClipboard} to="/new-product" />
        <Feature title="Editar" icon={FiEdit} to="/update-product/:id" />
      </main>
    </Container>
  )
}
