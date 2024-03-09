import "./App.css"
import heroImg from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/hero.png/'

function hero() {
    return(
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <img src={heroImg} alt=""></img>
                </div>
            </section>
        </>
    )
}

export default hero