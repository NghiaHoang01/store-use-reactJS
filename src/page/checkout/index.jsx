import "./Style.css"
import shoe from "../../assets/image/shoe-1.jpg"
import { Link, useNavigate } from "react-router-dom"

const Checkout = () => {
    const navigate = useNavigate()

    return <>
        <div className="checkout">
            <div className="checkout__infor-user">
                <p>Fashion Shoes</p>
                <p>Thông tin giao hàng</p>
                <form action="">
                    <div className="input-item">
                        <input type="text" placeholder="Tên của bạn là ..." />
                        <p>Tên người dùng</p>
                    </div>

                    <div className="input-group">
                        <div className="input-group__item">
                            <input type="email" placeholder="Email của bạn là ..." />
                            <p>Email</p>
                        </div>
                        <div className="input-group__item">
                            <input type="number" placeholder="Số điện thoại của bạn là ..." />
                            <p>Số điện thoại</p>
                        </div>
                    </div>

                    <div className="input-item">
                        <input type="text" placeholder="Địa chỉ nhận hàng là ..." />
                        <p>Địa chỉ</p>
                    </div>

                    <div className="input-select">
                        <div className="input-select__item">
                            <p>Tỉnh / Thành phố</p>
                            <select name="calc_shipping_provinces" required="">
                                <option value="">Tỉnh / Thành phố</option>
                            </select>
                        </div>
                        <div className="input-select__item">
                            <p>Quận / Huyện</p>
                            <select name="calc_shipping_district" required="">
                                <option value="">Quận / Huyện</option>
                            </select>
                        </div>
                        <input className="billing_address_1" type="hidden" value="" />
                        <input className="billing_address_2" type="hidden" value="" />
                    </div>

                    <div className="checkout-submit">
                        <Link to="/cart">
                            <i className="fa-solid fa-arrow-left"></i>
                            Giỏ hàng
                        </Link>
                        <button type="submit" onClick={() => {navigate("/thank")}}>Thanh toán</button>
                    </div>
                </form>
            </div>

            <div className="checkout__infor-product">
                <div className="checkout__infor-product__list">
                    <div className="checkout__infor-product__list-item">
                        <div className="checkout__infor-product__list-item__img">
                            <img src={shoe} alt="" />
                            <span>1</span>
                        </div>

                        <div className="checkout__infor-product__list-item__content">
                            <p>Nike Pegasus FlyEase</p>
                            <p>Size: 42</p>
                        </div>

                        <div className="checkout__infor-product__list-item__price">
                            <p>3,519,000<sup>đ</sup></p>
                        </div>
                    </div>

                    <div className="checkout__infor-product__list-item">
                        <div className="checkout__infor-product__list-item__img">
                            <img src={shoe} alt="" />
                            <span>1</span>
                        </div>

                        <div className="checkout__infor-product__list-item__content">
                            <p>Nike Pegasus FlyEase</p>
                            <p>Size: 42</p>
                        </div>

                        <div className="checkout__infor-product__list-item__price">
                            <p>3,519,000<sup>đ</sup></p>
                        </div>
                    </div>

                    <div className="checkout__infor-product__list-item">
                        <div className="checkout__infor-product__list-item__img">
                            <img src={shoe} alt="" />
                            <span>1</span>
                        </div>

                        <div className="checkout__infor-product__list-item__content">
                            <p>Nike Pegasus FlyEase</p>
                            <p>Size: 42</p>
                        </div>

                        <div className="checkout__infor-product__list-item__price">
                            <p>3,519,000<sup>đ</sup></p>
                        </div>
                    </div>
                </div>

                <div className="checkout__infor-product__price">
                    <div className="checkout__infor-product__price-item">
                        <p>Tạm tính</p>
                        <p>3,519,000<sup>đ</sup></p>
                    </div>

                    <div className="checkout__infor-product__price-item">
                        <p>Phí vận chuyển</p>
                        <p>30,000<sup>đ</sup></p>
                    </div>
                </div>

                <div className="checkout__infor-product__total">
                    <p>Tổng cộng</p>
                    <p>30,000<sup>đ</sup></p>
                </div>
            </div>
        </div>
        
        {/* Thiếu JS */}
    </>
}
export default Checkout