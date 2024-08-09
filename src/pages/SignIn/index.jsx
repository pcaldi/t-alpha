import { useState } from "react"

import { FiLock, FiUserPlus } from "react-icons/fi"
import { FaIdCard } from "react-icons/fa"

import { useAuth } from "../../hooks/auth"

import { Link } from "react-router-dom"

import logoImg from "../../assets/logo.png"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form } from "./style"

export function SignIn() {
  const [taxNumber, setTaxNumber] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function handleSignIn() {

    if (!taxNumber || !password) {
      alert("Preencha todos os campos!")
      return
    }

    signIn({ taxNumber, password })
  }

  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Logo da Empresa" />

        <h1>Faça seu login</h1>

        <Input
          placeholder="CPF ou CNPJ"
          type="text"
          icon={FaIdCard}
          onChange={e => setTaxNumber(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">
          <FiUserPlus />
          Criar conta
        </Link>

      </Form>

    </Container>
  )
}
