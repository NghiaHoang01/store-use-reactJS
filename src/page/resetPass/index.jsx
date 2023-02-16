import "../../page/forgotPass/Style.css"
import {Link} from "react-router-dom"
import bg from "../../assets/image/about-us.jpg"
const ResetPass = () => {
    return <>
        <div className="forgot">
            <div className="forgot-item" style={{backgroundImage: `url(${bg})`}}></div>
            <form action="">
                <div className="icon">
                    <p>Cập nhật mật khẩu</p>
                </div>
                <div className="forgot__input-item">
                    <p>Mật khẩu mới</p>
                    <input type="password"/>
                </div>
                <div className="forgot__input-item">
                    <p>Nhập lại mật khẩu</p>
                    <input type="password"/>
                </div>
                <div className="submit">
                    <button type="submit">Gửi</button>
                </div>
                <Link to="/">Trở về</Link>
            </form>
        </div>
    </>
}
export default ResetPass