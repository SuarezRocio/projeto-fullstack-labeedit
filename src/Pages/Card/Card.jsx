import React, { useState, useEffect } from 'react'
import axios from "axios";
import { H2, Div4, Button3, Img1 } from './Crad-styled'
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/labenuLogo.png'
import flechaup from '../../assets/Vector.png'
import flechadown from '../../assets/Vector(1).png'
import coment from '../../assets/Vector(2).png'






function Card({ p }) {


    const [post, setPost] = useState([])
    const [content, setContent] = useState("")
    const [titulo, setTitulo] = useState("")
    const [showInput, setShowInput] = useState(false)
    const [isLike, setIsLike] = useState(false)


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



    const handleLike = (id) => {
        console.log(id)
        setIsLike(!isLike)
        fetch
            (`https://labeedit-backend-deploy.onrender.com/post/${id}/like`, { method: "PUT", headers: { Authorization: localStorage.getItem("token") }, body: JSON.stringify({ likes: true, isLike }) })

            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleComment = (e, id) => {
        e.preventDefault()

        console.log(e)
        fetch
            (`https://labeedit-backend-deploy.onrender.com/comment`, {
                method: "POST9", headers: { Authorization: localStorage.getItem("token") }, body: JSON.stringify({ content: content })
            })

            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    const navigate = useNavigate()

    return (
        <>
            <Div4>
                <H2>{p.content}</H2>

                <div>
                    <Button3 onClick={() => { handleLike(p.id) }}>
                        <Img1 src={flechaup} alt="" srcset="" />
                    </Button3 >
                    <Button3>
                        <Img1 src={flechadown} alt="" srcset="" />
                    </Button3>
                    <Button3 onClick={() => { setShowInput(!showInput) }}>
                        <Img1 src={coment} alt="" srcset="" />
                    </Button3>

                </div>

                {showInput &&
                    <form onSubmit={(e) => { handleComment(e, p.id) }}>
                        <input onChange={(e) => { setContent(e.target.value) }} />
                        <button type='submit'>comentar</button>
                    </form>}
            </Div4>
        </>

    )
}

export default Card;