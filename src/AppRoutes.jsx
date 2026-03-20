import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Layout from "./layout/Layout";
import Contactos from "./pages/Contactos";


function AppRoutes(){
    return(
        <>
        <BrowserRouter>
        <Layout>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contactos" element={<Contactos/>}/>
           </Routes>
           </Layout>
        </BrowserRouter>
        
        </>
    )
}

export default AppRoutes