import "./Style.css"
import bg_thank from "../../assets/image/thank-bg.jpg"
import { Link } from "react-router-dom"
const Thank = () => {
    return <>
        <div className="thank" style={{backgroundImage: `url(${bg_thank})`}}>
            <div className="main">
                <div className="header__thank">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="body__thank">
                    <h1>Thank you</h1>
                    <h2>for your payment</h2>
                    <button><Link to={"/"}>Back Home</Link></button>
                    <h3>Follow us</h3>
                    <div className="body__icon">
                        <div className="body__icon-item">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className="body__icon-item">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div className="body__icon-item">
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        <div className="body__icon-item">
                            <i className="fa-brands fa-google"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Thank