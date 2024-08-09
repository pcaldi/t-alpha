/* eslint-disable react/prop-types */
import { Container } from './styles'


export function Item({ data, ...rest }) {
  return (
    <Container {...rest}>

      <main>


        <section>

          <h2>Produto: {data.name}</h2>
          <p><strong>Descrição:</strong> {data.description}</p>
          <p><strong>Preço: R$</strong> {data.price}</p>
          <p><strong>Estoque:</strong> {data.stock}</p>
        </section>

      </main>


    </Container>
  )
}
