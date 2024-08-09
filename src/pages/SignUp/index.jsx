import { useState } from "react"
import { FiArrowLeft, FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi"
import { FaIdCard } from "react-icons/fa"

import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import logoImg from "../../assets/logo.png"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form } from "./style"

export function SignUp() {

  const [name, setName] = useState("")
  const [taxNumber, setTaxNumber] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()


  function handleSingUp() {
    //console.log(name, taxNumber, email, phone, password)

    if (!name || !taxNumber || !mail || !phone || !password) {
      alert("Preencha todos os campos!")
      return
    }
    api
      .post("/api/auth/register", { name, taxNumber, mail, phone, password })
      .then(() => {
        alert("Conta criada com sucesso! Faça o login.")
        navigate("/")
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Erro ao cadastrar a conta. Tente novamente.")
        }

      })

  }

  return (
    <Container>
      <Form>
        <img src={logoImg} alt="Logo da Empresa" />

        <h1>Crie a sua conta</h1>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="CPF ou CNPJ"
          type="text"
          icon={FaIdCard}
          onChange={e => setTaxNumber(e.target.value)}
        />


        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setMail(e.target.value)}
        />


        <Input
          placeholder="Telefone"
          type="text"
          icon={FiPhone}
          onChange={e => setPhone(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />


        <Button title="Cadastrar" onClick={handleSingUp} />

        <Link to="/">
          <FiArrowLeft />
          Já tenho uma conta
        </Link>

      </Form>

    </Container>
  )
}
