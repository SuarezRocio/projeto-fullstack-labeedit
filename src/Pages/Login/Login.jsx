import React from 'react'
import logo from '../../assets/labenuLogo.png'
//import { InputCheck, Img, Div, P, Div1, Input, Form, P1, Button, Div2, P2 } from './Login-styled'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { BASE_URL, TOKEN_NAME } from "../../constants/url";
//import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { Img, Div, P, Div1, Form, P1, Button, Div2, P2, Button2, Label, H2 } from './Login-styled'


function Login() {


  const [email, setEmail] = useState("")
  const [password, setPaswword] = useState("")
  const [loading, setLoading] = useState(false)

  //const emailito = "sofia@email.com"
  //const passwordcita = ""

  /*const bodyexample =
   {
     "email": "sofia@email.com",
     "password": "S45456d478L"
   }
 
   axios
     .post("https://deploy-labeedit-back.onrender.com/users/login", bodyexample)
     .then((res) => {
       console.log(res.data)
     })
 */

  function handleLogin(e) {
    //const navigate = useNavigate()

    e.preventDefault()

    console.log("hola mundo")

    const bodyexample =
    {
      "email": "sofia@email.com",
      "password": "S45456d478L"
    }

    const body = {
      "email": email,
      "password": password
    }

    /*axios
      .post("https://deploy-labeedit-back.onrender.com/users/login", body)
      .then((res) => {
        console.log(res.data)
      })
      **/
    console.log(password)
    console.log(email)
    console.log(body)

    setLoading(true)

    axios
      .post("https://deploy-labeedit-back.onrender.com/users/login", body)

      .then((response) => {
        console.log(response.data)
        localStorage.setItem("token", response.data.token)
        navigate("/home")
      })

      .catch((error) => {
        console.log(error)
      })


  }
  const navigate = useNavigate()

  /**Promise.all([p1, p2, p3, p4, p5])
    .then((values) => {
      console.log(values);
    })
    .catch((error) => {
      console.error(error.message);
    }); */


  return (

    <Div>

      {loading ? <H2>cargando...</H2> : <>
        <Img src={logo} />
        <P>O projeto de rede social da Labenu</P>

        <Form onSubmit={(e) => { handleLogin(e) }}>
          <Div1>
            <Label>Email</Label>
            <input placeholder="ingrese el email" type="text" onChange={(e) => { setEmail(e.target.value) }} />
          </Div1>
          <Div1>
            <Label>Senha</Label>
            <input placeholder="ingrese la senha" type="password" onChange={(e) => { setPaswword(e.target.value) }} />
          </Div1>
          <P1>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</P1>
          <Div2>
            <input type='checkbox'></input>
            <P2>Eu concordo em receber emails sobre coisas legais no Labeddit</P2>
          </Div2>

          <Button type="submit">Entrar</Button>
          <Button2 onClick={() => { navigate("/") }}>Crear Conta</Button2 >
        </Form> </>}
    </Div>
  )

}
export default Login