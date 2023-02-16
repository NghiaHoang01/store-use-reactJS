import "./Style.css"
import { Link } from "react-router-dom"
import img_background from "../../assets/image/img-bg.jpg"

const Header = (props) => {
    return <>
        {/* <!-- img-background --> */}
        <div class="bg-image">
            <div class="img" style={{backgroundImage: `url(${img_background})`}}>

            </div>
            <div class="link">
                <p>
                    <Link to="">Trang chủ</Link><span> / {props.page}</span>
                </p>
            </div>
        </div>
    </>
}

export default Header