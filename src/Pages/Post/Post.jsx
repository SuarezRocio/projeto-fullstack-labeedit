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
//import { H3, Label4, Button, Div, Button2, Img, Div2, Section } from './HomePage-styled'

import { H3, Label4, Button, Div, Button2, Img, Div2, Section, H2, Section1, Div4, Input, Div5, Button3, Img1 } from './Post-styled'
//import logo from '../../assets/labenuLogo.png'
//import { useNavigate } from 'react-router-dom';
//, Div5 
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/labenuLogo.png'





function Post() {


    //const [form, setForm] = useState()
    const [post, setPost] = useState([])
    const [content, setContent] = useState("")
    const [titulo, setTitulo] = useState("")




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


    const navigate = useNavigate()


    // function createPost(e) {
    //     e.preventDefault()

    /* const Headers = {
       "headers": {
         "Authorization": localStorage.getItem("token")
       }
     }
 
     const body = {
       "content": content
     }
 */

    /*       const navigate = useNavigate()
   
           axios
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
                   navigate("/home")
               })
   
               .catch((error) => {
                   console.log(error)
               })
       }
       
         <H2>p.titulo={p.titulo}</H2>
       */

    //<Div5></Div5>
    /**
                                        <Button3>
/** <Div5>
                                    <Button3></Button3>
                                    <Img1 src="../../assets/Vector.png" alt="" srcset="" />

                                    <Button3>
                                        <Img1 src="../../assets/Vector(1).png" alt="" srcset="" />
                                    </Button3>
                                    <Button3>
                                        <Img1 src="../../assets/Vector(2).png" alt="" srcset="" />
                                    </Button3>
                                </Div5>                                             <Img1 src="../../assets/Vector.png" alt="" srcset="" />
                                        </Button3> */
    return (
        <>

            <Div>
                <Div2>
                    <Img src={logo} />
                    <Button2 onClick={() => { navigate("/") }}>Deslogar</Button2>
                </Div2>
                <div>
                    <Section1>

                        {post.map((p) => (
                            <Div4>
                                <H2>{p.content}</H2>
                            </Div4>

                        ))}
                    </Section1>
                </div>
                <Button onClick={() => { navigate("/home") }}>Volver a comentar</Button>

                {/*  <section>
                    <form onSubmit={Post}>
                        <Section>
                            <H3>Crear comentario</H3>
                            <Label4 htmlFor='tituloComentario'>Título del comentario:</Label4>
                            <Input placeholder='digite um título para o seu comentario'
                                name="title"
                                onChange={(e) => { setTitulo(e) }}
                            />
                            <Label4 htmlFor='textoPost'>Texto:</Label4>
                            <textarea placeholder='crie um comentario!'
                                name="body"
                                onChange={(e) => { setContent(e) }}
                            />
                        </Section>

                        <Button type='submit'>Comment</Button>

                    </form>
                        </section>*/}

            </Div>

        </>

    )
}

/*


                        {post.map((t) => (
                            <div>
                                <h2>t.titulo={t.titulo}</h2>
                            </div>
                        ))}



    onClick={navigate("/post/:id")}    
            <h1>soy el post</h1>
return (
  <div>HomePage
    <section>
      {post.map((post, index) => {
        return <div key={index}> {post.content} </div>
      })}
    </section>
 
  </div>
 
)
}*/



/*     <Div>
               <Div2>
                   <Img src={logo} />
                   <Button2>Deslogar</Button2>
               </Div2>

               <section>
                   <form onSubmit={createPost}>
                       <Section>
                           <H3>Crear post</H3>
                           <Label4 htmlFor='tituloComentario'>Título del comentario:</Label4>
                           <input placeholder='digite um título para o seu comentario'
                               name="title"
                               onChange={(e) => { setTitulo(e) }}
                           />
                           <Label4 htmlFor='textoPost'>Texto:</Label4>
                           <textarea placeholder='crie um comentario!'
                               name="body"
                               onChange={(e) => { setContent(e) }}
                           />
                       </Section>

                       <Button type='submit'>Comment</Button>

                   </form>
               </section>

           </Div>
           */

export default Post;