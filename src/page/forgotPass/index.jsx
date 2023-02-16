import "./Style.css"
import {Link} from "react-router-dom"
import bg from "../../assets/image/about-us.jpg"
const ForgotPass = () => {
    return <>
    <div className="forgot">
            <div className="forgot-item" style={{backgroundImage: `url(${bg})`}}>
            </div>

            <form action="">
                <div className="icon">
                    <p>Quên mật khẩu</p>
                </div>
                <div className="forgot__input-item">
                    <p>Email</p>
                    <input type="email"/>
                </div>

                <div className="submit">
                    <button type="submit">Gửi</button>
                </div>
                <Link to="/">Trở về</Link>
            </form>
        </div>F
    </>
}
export default ForgotPass