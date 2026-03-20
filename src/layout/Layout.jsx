import Header from "./Header"
import Footer from "./Footer"


function Layout ({children}){
  return(
  <>
    <section className="container">
        <Header/>
       {children}
        <Footer/>
    </section> 
  </>
  )
}

export default Layout

