import '/Users/ringo/Desktop/coca-cola-landing-page/src/App.css';
import imageOne from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/image2.webp'
import imageTwo from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/image.webp'
function Features() {
    return(
        <>
            <section className='features-section'>
                <div className='features-container'>
                    <div className='features-content'>
                        <div className='features-img'>
                            <img src={imageOne} alt='' />
                        </div>
                        <div className='features'>
                            <h1>People Matter</h1>
                            <p>We believe that a diverse, equitable and inclusive workplace makes us stronger as a company, enables us to create a better shared future for employees and communities, empowers access to equal opportunity and builds belonging in our workplaces and in society. </p>

                            <button>
                                Read More
                            </button>
                        </div>
                    </div>

                    <div className='features-content-two'>

                    <div className='features-two-img'>
                            <img src={imageTwo} alt='' />
                        </div>
  
                        <div className='features-two'>
                            <h1>People Matter</h1>
                            <p>We believe that a diverse, equitable and inclusive workplace makes us stronger as a company, enables us to create a better shared future for employees and communities, empowers access to equal opportunity and builds belonging in our workplaces and in society. </p>

                            <button>
                                Read More
                            </button>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Features