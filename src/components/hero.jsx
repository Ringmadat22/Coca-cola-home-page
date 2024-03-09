import Hero from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/hero.png'
import '/Users/ringo/Desktop/coca-cola-landing-page/src/App.css';

function hero() {
    return(
        <>
            <section className="hero-section">
                <div className="hero-container">
                    <div className='hero-img-div'>
                        <img src={Hero} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default hero