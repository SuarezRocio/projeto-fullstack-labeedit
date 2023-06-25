import React, { useState, useEffect } from 'react'
import axios from "axios";
import { H3, Label4, Button, Div, Button2, Img, Div2, Section } from './HomePage-styled'

import logo from '../../assets/labenuLogo.png'
import { useNavigate } from 'react-router-dom';






function HomePage() {


  const [post, setPost] = useState([])
  const [content, setContent] = useState("")
  const [titulo, setTitulo] = useState("")
  const [text, setText] = useState("")



  useEffect(() => {

    axios
      .get("https://deploy-labeedit-back.onrender.com/post", { headers: { Authorization: localStorage.getItem("token") } })

      .then((response) => {
        console.log(response.data)
        setPost(response.data)
      })

      .catch((error) => {
        console.log(error)
      })
  }, [])




  async function createPost(e) {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        content: text,
        titulo: text
      }),
    };
    fetch('https://deploy-labeedit-back.onrender.com/post', requestOptions)
      .then((res) => {
        navigate('/post/1')
      })


  }

  const navigate = useNavigate()


  return (
    <Div>
      <Div2>
        <Img src={logo} />
        <Button2 onClick={() => { navigate("/") }}>Deslogar</Button2>
      </Div2>

      <section>
        <form onSubmit={createPost}>
          <Section>
            <H3>Crear post</H3>
            <Label4 htmlFor='textoPost'>Texto:</Label4>
            <textarea placeholder='crie um post!' name="body"
              onChange={(e) => { setText(e.target.value) }}
            />
          </Section>

          <Button type='submit'>Enviar</Button>

        </form>
      </section>

    </Div>



  )
}


export default HomePage;