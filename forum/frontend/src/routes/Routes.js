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
import CreatePost from "../pages/CreatePost/CreatePost"
import PostDetails from "../pages/PostDetails/PostDetails"

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
                <Route element={<CreatePost/>} path="/CreatePost"/>
                <Route element={<PostDetails/>} path="/PostDetails/:postID"/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;