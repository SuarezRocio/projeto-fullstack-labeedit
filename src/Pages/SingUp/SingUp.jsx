import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Label4, Div3, Div, InputCheck, P, Div1, Input, Form, P1, Button, P2, Img, ButtonEntrar, Nav, H2 } from './SingUp-styled'
import logo from '../../assets/labenuLogo.png'

function SingUp() {


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")
  const [loading, setLoading] = useState(false)


  function handleSubmit(e) {
    //const navigate = useNavigate()

    console.log("hola mundo")

    e.preventDefault()

    const body = {
      name,
      email,
      password
    }


    setLoading(true)

    axios
      .post("https://deploy-labeedit-back.onrender.com/users/signup", body)

      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.token)
        navigate("/home")
      })

      .catch((error) => {
        console.log(error)
      })


  }
  const navigate = useNavigate()

  {/* {loading ? <H2>cargando...</H2> : <>*/ }
  {/* </>}*/ }

  return (
    <Div>
      {loading ? <H2>cargando...</H2> : <>
        <Nav >
          <Img src={logo} />
          <ButtonEntrar onClick={() => { navigate("/login") }}>Entrar</ButtonEntrar>
        </Nav>
        <P>Olá, boas vindas ao LabEddit </P>

        <Form onSubmit={(e) => { handleSubmit(e) }}>

          <Div1>
            <Label4>Nome</Label4>
            <Input placeholder="ingrese el nombre" type="text" onChange={(e) => { setName(e.target.value) }} />

            <Label4>Email</Label4>
            <input placeholder="ingrese el email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
            <Label4>Senha</Label4>
            <input placeholder="ingrese la senha" type="password" onChange={(e) => { setPaswword(e.target.value) }} />

            <Label4>Confirmation Senha</Label4>
            <Input placeholder="ingrese la senha" type="password" onChange={(e) => { setPaswword(e.target.value) }} />

          </Div1>

          <Div3>
            <P1>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</P1>
            <InputCheck type='checkbox'></InputCheck>
          </Div3>

          <Div3>
            <P2>Eu concordo em receber emails sobre coisas legais no Labeddit</P2>
            <InputCheck type='checkbox'></InputCheck>
          </Div3>

          <Button type="submit" >Cadastrar</Button>
        </Form>
      </>}
    </Div>


  )

}
export default SingUp;