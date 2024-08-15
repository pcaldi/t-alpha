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

  function validateCPF_CNPJ(taxNumber) {
    const cleanedTaxNumber = taxNumber.replace(/\D/g, '')
    if (cleanedTaxNumber.length === 11 || cleanedTaxNumber.length === 14) {
      return true
    } else {
      return false
    }
  }

  function validateEmail(email) {
    const regexMail = /\S+@\S+\.\S+/
    return regexMail.test(email)
  }

  function validatePhone(phone) {
    const cleanedPhone = phone.replace(/\D/g, '')
    return cleanedPhone.length >= 10 && cleanedPhone.length <= 11
  }

  function handleSingUp() {
    if (!name || !taxNumber || !mail || !phone || !password) {
      alert("Preencha todos os campos!")
      return
    }

    if (!validateCPF_CNPJ(taxNumber)) {
      return alert("CPF ou CNPJ inválido!")
    }

    if (!validateEmail(mail)) {
      return alert("E-mail inválido!")
    }

    if (!validatePhone(phone)) {
      return alert("Telefone inválido!")
    }

    if (password.length < 6) {
      return alert("A senha deve ter pelo menos 6 caracteres.")
    }

    api
      .post("/api/auth/register", { name, taxNumber, mail, phone, password })
      .then(() => {
        alert("Conta criada com sucesso! Faça o login.")
        navigate("/")
      })
      .catch(error => {
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
