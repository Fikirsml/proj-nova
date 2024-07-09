import { BrowserRouter,Routes,Route,Link,NavLink } from "react-router-dom"
import Home from "./pages/Home"
import SigninPage from "./pages/SigninPage"
import SignupPage from "./pages/SignupPage"
import BlogAbout from "./components/BlogAbout"
import BlogPost from "./components/BlogPost"
import BlogPage from "./pages/BlogPage"
import CommentBox from "./components/CommentBox"
import AccMenu from "./components/AccMenu" 
import ServicesPage from "./pages/ServicesPage"




const App = () => {
  return (
   <>
   {/* <Home/> */}
 
   {/* <SigninPage/> */}
  
   {/* <BlogPage/> */}

  

  {/* <ServicesPage/> */}
  <BrowserRouter>
  
  <Routes>
    <Route  index element={<Home/>}/>
    <Route  path="/signin" element={<SigninPage/>}/>
    <Route  path="/signup" element={<SignupPage/>}/>
    <Route  path="/blog" element={<BlogPage/>}/>
    <Route  path="/services" element={<ServicesPage/>}/>
  </Routes>
  </BrowserRouter>
    
   </>
  )
}

export default App
