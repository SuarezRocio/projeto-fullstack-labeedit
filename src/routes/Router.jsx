import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../Pages/Login/Login"
import HomePage from "../Pages/HomePage/HomePage"
import SingUp from "../Pages/SingUp/SingUp"


export default function Router (){
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SingUp" element={<SingUp/>} />            
        </Routes>    
        </BrowserRouter>
    )
}