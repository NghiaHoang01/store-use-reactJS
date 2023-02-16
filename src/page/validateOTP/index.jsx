import "../../page/forgotPass/Style.css"
import {Link} from "react-router-dom"
import bg from "../../assets/image/about-us.jpg"
const ValidateOTP = () => {
    return <>
        <div class="forgot">
            <div class="forgot-item" style={{backgroundImage: `url(${bg})`}}></div>
            <form action="">
                <div class="icon">
                    <p>Nhập mã OTP</p>
                </div>
                <div class="forgot__input-item">
                    <p>OTP</p>
                    <input type="text"/>
                </div>

                <div class="submit">
                    <button type="submit">Gửi</button>
                </div>
                <Link to="/">Trở về</Link>
            </form>
        </div>
    </>
}
export default ValidateOTP