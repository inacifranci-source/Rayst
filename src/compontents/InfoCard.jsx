import {ChartNoAxesCombined, Target} from "lucide-react"

function InfoCard (){
  return(
    <>
    <section className="info-cards">
      <div className="caixa">
        <div className="card">
          <div>
           <ChartNoAxesCombined />
          <h4>Fique Atualizado</h4>
          </div>
          <p>Entenda as tecnologias mais recentes.</p>
        </div>

        <div className="card">
          <h4>Gerar Clientes</h4>
          <p>Encontre clientes ideais pelas tecnologias que usam.</p>
        </div>

        <div className="card">
          <h4>Analisar Concorrência</h4>
          <p>Descubra quem usa produtos concorrentes.</p>
        </div>

        <div className="card">

          <h4>Extensão</h4>
          
          <p>Veja dados e tecnologias de qualquer site.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default InfoCard