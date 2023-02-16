import "./Style.css"

import orther_nike from "../../assets/image/orther-nike.jpg"
import orther_adidas from "../../assets/image/orther-adidas.jpg"
import orther_puma from "../../assets/image/orther-puma.jpg"
import orther_lining from "../../assets/image/orther-lining.jpg"
import orther_anta from "../../assets/image/orther-anta.jpg"

const Footer = () => {
    return <>
        <div className="orther-title">
            <p>Sản phẩm theo hãng</p>
        </div>
        <div className="orther">
            <div className="orther-item">
                <a href="./ShopNow.html">
                    <img src={orther_adidas} alt="" />
                        <p>Adidas</p>
                </a>
            </div>
            <div className="orther-item">
                <a href="./ShopNow.html">
                    <img src={orther_nike} alt=""/>
                        <p>Nike</p>
                </a>
            </div>
            <div className="orther-item">
                <a href="./ShopNow.html">
                    <img src={orther_puma} alt=""/>
                        <p>Puma</p>
                </a>
            </div>
            <div className="orther-item">
                <a href="./ShopNow.html">
                    <img src={orther_lining} alt=""/>
                        <p>Lining</p>
                </a>
            </div>
            <div className="orther-item">
                <a href="./ShopNow.html">
                    <img src={orther_anta} alt=""/>
                        <p>Anta</p>
                </a>
            </div>
        </div>

        <div className="footer">
            <div className="footer-item">
                <p>Fashion Shoes</p>
                <div className="infor-item">
                    <i className='bx bx-location-plus'></i>
                    <p>2/18, tổ 9, KP 5A, phường Trảng Dài, Biên Hòa-Đồng Nai</p>
                </div>

                <div className="infor-item">
                    <i className='bx bx-envelope'></i>
                    <p>bebebechecheche@gmail.com</p>
                </div>

                <div className="infor-item">
                    <i className='bx bx-phone-call'></i>
                    <p>0888346324</p>
                </div>

                <div className="ifor-icon">
                    <i className='bx bxl-facebook'></i>
                    <i className='bx bxl-twitter'></i>
                    <i className='bx bxl-instagram'></i>
                    <i className='bx bxl-youtube'></i>
                    <i className='bx bxl-google-plus'></i>
                </div>
            </div>

            <div className="footer-item">
                <p>Về chúng tôi</p>
                <div className="footer-item__content">
                    <p>Trang chủ</p>
                    <p>Giới thiệu</p>
                    <p>Liên hệ</p>
                    <p>Giúp đỡ</p>
                </div>
            </div>

            <div className="footer-item">
                <p>Hướng dẫn</p>
                <div className="footer-item__content">
                    <p>Tìm kiếm</p>
                    <p>Chính sách đổi trả</p>
                    <p>Chính sách bảo mật</p>
                    <p>Điều khoản dịch vụ</p>
                </div>
            </div>
        </div>
        <div className="design">
            <p>Copyright © 2022 Fashion Shoes. Powered by Hoàng Đại Nghĩa</p>
        </div>

    </>
}

export default Footer