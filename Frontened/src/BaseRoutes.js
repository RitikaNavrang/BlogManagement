import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./Login"
import Post from "./Post"
import Register from "./Register"
import Home from "./Home"
import { AddPost } from "./AddPost"


export const BaseRoutes = () =>{
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signUp" element={<Register />} />
                <Route path="/post" element={<Post />} />
                <Route path="/home" element={<Home />} />
                <Route path="/addpost" element={<AddPost />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}