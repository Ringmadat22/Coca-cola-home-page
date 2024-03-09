import '/Users/ringo/Desktop/coca-cola-landing-page/src/App.css';
import coca from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/brand-cola.png'
import fanta from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/brand-fanta.webp'
import sprite from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/brand-sprite.png'


function Brands() {
    return(
        <>
            <section className='brands-section'>
            <h1 style={{textAlign:"center",fontSize:"2rem", fontWeight:"500"}}>Our Brands</h1>
                <div className='brand-container'>
                    <div className='brand-content'>
                        <div className='brand'>
                            <img src={coca} alt='' />
                        </div>

                        <div className='brand'>
                            <img src={sprite} alt='' />
                        </div>

                        <div className='brand'>
                            <img src={fanta} alt='' />
                        </div>
                        
                    </div>

                    <button>
                                Read More
                    </button>
                </div>
            </section>
        </>
    )
}

export default Brands