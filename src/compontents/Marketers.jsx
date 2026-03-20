import texto from "./Title"



function Marketers (){
    return(
        <>
           <section className="marketing-section">
              <div>
                <h1>{texto.marketing.h1}</h1>
                <h1><span>{texto.marketing.span}</span></h1>
              </div>
              <div className="p">
                  <p>{texto.marketing.p1}</p>
                  <p>{texto.marketing.p2}</p>
              </div>
           </section>
        </>
    )
}

export default Marketers