import '/Users/ringo/Desktop/coca-cola-landing-page/src/App.css';
import { IoLocationOutline } from "react-icons/io5";
import FooterLogo from '/Users/ringo/Desktop/coca-cola-landing-page/src/images/footer-logo.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer(){
    return(
        <>
            <footer>
                <section className='footer-section'>
                    <div className='footer-container'>
                        <div className='upper-footer'>
                            <div className='img-div'>
                                <img src={FooterLogo} alt='' />
                            </div>

                            <div className='upper-footer-content'>
                                <button>
                                <IoLocationOutline style={{marginTop:"3px", fontSize:"1rem"}} /> Africa
                                </button>
                            </div>
                        </div>

                        <div className='middle-footer'>
                            <div className='middle-footer-content'>
                                <div className='footer-content-one'>
                                    <h1>ABOUT US</h1>

                                    <ul>
                                        <li>
                                            <a href='#home'>Our Company</a>
                                        </li>

                                        <li>
                                            <a href='#home'>Media Center</a>
                                        </li>

                                        <li>
                                            <a href='#home'>History</a>
                                        </li>

                                        <li>
                                            <a href='#home'>Careers</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='footer-content-one'>
                                    <h1>NEED HELP ?</h1>

                                    <ul>
                                        <li>
                                            <a href='#home'>FAQs</a>
                                        </li>

                                        <li>
                                            <a href='#home'>Site Map</a>
                                        </li>

                                        <li>
                                            <a href='#home'>Contact Us</a>
                                        </li>

                                    </ul>
                                </div>

                                <div className='footer-content-one'>

                                    <ul style={{marginTop:"85px"}}>
                                        <li>
                                            <a href='#Home'>Terms Of Use</a>
                                        </li>

                                        <li>
                                            <a href='#Home'>Privacy Policy</a>
                                        </li>

                                        <li>
                                            <a href='#Home'>Cookie Policy</a>
                                        </li>

                                        <li>
                                            <a href='#Home'>Cookie Settings</a>
                                        </li>

                                        <li>
                                            <a href='#Home'>PAIA</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='footer-socials'>
                                <div>
                                <CiFacebook />
                                </div>

                                <div>
                                <FaInstagram />
                                </div>

                                <div>
                                <FaYoutube />
                                </div>
                            </div>
                        </div>

                        <div className='lower-footer'>
                            <p>© 2024 The Coca‑Cola Company. All rights reserved.</p>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer