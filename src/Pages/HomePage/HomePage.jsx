import React, { useState, useEffect } from 'react'
//import styled from '@emotion/styled'
//
//import logo from '../../assets/labenuLogo.png'
//import { Div4, P3, Img, Div, Div1, Button, Nav, Div2, Div3, Button2 } from './HomePage-styled'
import axios from "axios";
//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
//import Header from "../../Componentes/Header";
//import PostCard from "../../Componentes/PostCard";
//import CommentCard from "../../Componentes/CommentCard";
//import { BASE_URL, TOKEN_NAME } from "../../constants/url";
//import { GlobalContext } from "../../contexts/GlobalContext";
//import { goToLoginPage } from "../../routes/coordinator";
import { H3, Label4, Button, Div, Button2, Img, Div2, Section } from './HomePage-styled'

import logo from '../../assets/labenuLogo.png'
import { useNavigate } from 'react-router-dom';






function HomePage() {


  //const [form, setForm] = useState()
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

    /* const Headers = {
       "headers": {
         "Authorization": localStorage.getItem("token")
       }
     }
 
     const body = {
       "content": content
     }
 */

    //const [text, setText] = useState('')


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





    /*
        const requestOptions = {
          method: 'POST',
          headers: {
            Authorization: localStorage.getItem("token")
          },
          body: JSON.stringify({
            content: text
          })
        }
        fetch(
          'https://deploy-labeedit-back.onrender.com/post',
          requestOptions
        )
          .then(res => res.json())
          .then((response) => {
            console.log(response)
            localStorage.setItem("token", response.data)
            navigate("/post/1")
          })
    */


    /*
        const bodyContent = { content: text }
    
        const serializadoBodyContent = { ...bodyContent }
    
        delete serializadoBodyContent.circularReference
        await fetch(
          'https://deploy-labeedit-back.onrender.com/post',
          {
            method: 'POST',
            headers: {
              Authorization: localStorage.getItem("token"),
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(serializadoBodyContent)
          }
        )
          .then(res => res.json())
          .then((response) => {
            console.log(response)
            localStorage.setItem("token", response.data)
            navigate("/post/1")
          })
    
    */
    /* fetch(
       'https://deploy-labeedit-back.onrender.com/post',
       {
         method: 'POST',
         headers: {
           Authorization: localStorage.getItem("token")
         },
         body: JSON.stringify({ content: text })
       }
     )
       .then(res => res.json())
       .then((response) => {
         console.log(response)
         localStorage.setItem("token", response.data)
         navigate("/post/1")
       })
 */
    /* axios
      .post("https://deploy-labeedit-back.onrender.com/post", {
         "content": content
       }, {
         "headers": {
           "Authorization": localStorage.getItem("token")
         }
       })
 
       .then((response) => {
         console.log(response)
         localStorage.setItem("token", response.data)
         navigate("/post/1")
       })
 
       .catch((error) => {
         console.log(error)
       })*/
  }

  const navigate = useNavigate()

  /** <Label4 htmlFor='tituloPost'>Título:</Label4>
              <input placeholder='digite um título para o seu post'
                name="title"
                onChange={(e) => { setTitulo(e.target.value) }}
              /> */

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

/*return (
  <div>HomePage
    <section>
      {post.map((post, index) => {
        return <div key={index}> {post.content} </div>
      })}
    </section>

  </div>

)
}*/
export default HomePage;