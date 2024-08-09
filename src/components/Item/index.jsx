/* eslint-disable react/prop-types */
import { Container } from './styles'

export function Item({ data, ...rest }) {
  return (
    <Container {...rest}>
      {
        data.item &&
        <main>
          {
            data.item.map((item) => (
              <section key={String(item.id)}>

                <h2>Produto: {item.name}</h2>
                <p><strong>Descrição:</strong> {item.description}</p>
                <p><strong>Preço:</strong> {item.price}</p>
                <p><strong>Estoque:</strong> {item.stock}</p>
              </section>
            ))
          }
        </main>
      }

    </Container>
  )
}
