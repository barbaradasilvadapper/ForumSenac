import { BrowserRouter, Route, Routes } from "react-router-dom"

import Login from "../pages/Login/Login"
import Cadastro from "../pages/Cadastro/Cadastro"
import Home from "../pages/Home/Home"
import Tags from "../pages/Tags/Tags"
import Dashboard from "../pages/Dashboard/Dashboard"
import MyPosts from "../pages/MyPosts/MyPosts"
import MyAnswers from "../pages/MyAnswers/MyAnswers"
import Like from "../pages/Like/Like"
import Ranking from "../pages/Ranking/Ranking"

function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route element={<Cadastro/>} path="/Cadastro"/>
                <Route element={<Home/>} path="/Home"/>
                <Route element={<Tags/>} path="/Tags"/>
                <Route element={<Dashboard/>} path="/Dashboard"/>
                <Route element={<MyPosts/>} path="/MyPosts"/>
                <Route element={<MyAnswers/>} path="/MyAnswers"/>
                <Route element={<Like/>} path="/Like"/>
                <Route element={<Ranking/>} path="/Ranking"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;