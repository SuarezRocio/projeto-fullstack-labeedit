import React, { useState, useEffect } from 'react'
import axios from "axios";

import { H3, Label4, Button, Div, Button2, Img, Div2, Section, H2, Section1, Div4, Input, Div5, Button3, Img1 } from './Post-styled'

import { useNavigate } from 'react-router-dom';
import Card from "../Card/Card"


import logo from '../../assets/labenuLogo.png'






function Post() {


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


    console.log(post)
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
                            <Card p={p} />
                        ))}
                    </Section1>
                </div>
                <Button onClick={() => { navigate("/home") }}>Volver a comentar</Button>


            </Div>

        </>

    )
}

export default Post;