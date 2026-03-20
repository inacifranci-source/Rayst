import images from "./Icons"
import texto from "../compontents/Title"

function Hero() {
    return (
        <section className="Hero">

            <h1>{texto.hero.h1}</h1>
            <p>{texto.hero.p}</p>
            <button className="btn">
                <img src={images.ButtonImg} alt="" />
                Watch Demo
            </button>
        </section>
    )
}

export default Hero
