import "./Style.css"
import { Link } from "react-router-dom"

import slider_1 from "../../assets/image/slider-1.jpg"
import slider_2 from "../../assets/image/slider-2.jpg"
import slider_3 from "../../assets/image/slider-3.jpg"
import slider_4 from "../../assets/image/slider-4.jpg"
import slider_5 from "../../assets/image/slider-5.jpg"
import brand_1 from "../../assets/image/brand-1.jpg"
import brand_2 from "../../assets/image/brand-2.jpg"
import brand_3 from "../../assets/image/brand-3.jpg"
import brand_4 from "../../assets/image/brand-4.jpg"
import brand_5 from "../../assets/image/brand-5.jpg"
import brand_6 from "../../assets/image/brand-6.jpg"
import shoe from "../../assets/image/shoe-1.jpg"
import benefit_1 from "../../assets/image/benefit-1.jpg"
import benefit_2 from "../../assets/image/benefit-2.jpg"
import benefit_3 from "../../assets/image/benefit-3.jpg"
import benefit_4 from "../../assets/image/benefit-4.jpg"
import email from "../../assets/image/signup-email.jpg"

const Home = () => {
    return <>
            {/* <!-- body --> */}
        <div className="home">
            <div className="slider">
                <div className="slider-left">
                    <div className="slider-left__item">
                        <Link to="/shopnow">
                            <div className="slider-left__item-img">
                                <img src={slider_1} alt=""/>
                            </div>
                            <div className="slider-left__item-title">
                                <p>Ultra Boost Shoes</p>
                                <p>
                                    Shop adidas
                                    <i className="fa-solid fa-angle-down"></i>
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="slider-left__item">
                        <Link to="/shopnow">
                            <div className="slider-left__item-img">
                                <img src={slider_2} alt=""/>
                            </div>
                            <div className="slider-left__item-title">
                                <p>Nike classNameic Cortez</p>
                                <p>
                                    Shop nike
                                    <i className="fa-solid fa-angle-down"></i>
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="slider-left__item">
                        <Link to="/shopnow">
                            <div className="slider-left__item-img">
                                <img src={slider_3} alt=""/>
                            </div>
                            <div className="slider-left__item-title">
                                <p>Roma Basic Sneakers</p>
                                <p>
                                    Shop Puma
                                    <i className="fa-solid fa-angle-down"></i>
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="slider-left__item">
                        <Link to="/shopnow">
                            <div className="slider-left__item-img">
                                <img src={slider_4} alt=""/>
                            </div>
                            <div className="slider-left__item-title">
                                <p>Twin Carbon Plates</p>
                                <p>
                                    Shop Lining
                                    <i className="fa-solid fa-angle-down"></i>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="slider-center">
                    <Link to="/shopnow">
                        <div className="slider-center__item-img">
                            <img src={slider_5} alt=""/>
                        </div>
                        <div className="slider-center__item-title">
                            <p>The Rangged Priest</p>
                            <p>
                                Shop now
                                <i className="fa-solid fa-angle-down"></i>
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="partner">
                <div className="partner-item">
                    <img src={brand_1} alt=""/>
                </div>
                <div className="partner-item">
                    <img src={brand_2} alt=""/>
                </div>
                <div className="partner-item">
                    <img src={brand_3} alt=""/>
                </div>
                <div className="partner-item">
                    <img src={brand_4} alt=""/>
                </div>
                <div className="partner-item">
                    <img src={brand_5} alt=""/>
                </div>
                <div className="partner-item">
                    <img src={brand_6} alt=""/>
                </div>
            </div>

            <div className="featured-products">
                <div className="featured-products__title">
                    <h3>Sản phẩm nổi bật</h3>
                </div>
                <div className="featured-products-list">
                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <a href="single.jsp">
                                Chi tiết
                            </a>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <a href="single.jsp">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </a>
                            </div>
                            <div className="product-item-content__cart">
                                <a href="cart.jsp">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="product-item__img">
                            <img src={shoe} alt=""/>
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="product-item-content">
                            <div className="product-item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="product-item-content__cart">
                                <Link to="/cart">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="load-more-products">
                    <button>Xem Thêm</button>
                </div>
            </div>

            <div className="benefit">
                <div className="benefit-item">
                    <img src={benefit_1} alt=""/>
                    <h2>Miễn phí vận chuyển</h2>
                    <p>Cho đơn hàng trên 500k</p>
                </div>
                <div className="benefit-item">
                    <img src={benefit_2} alt=""/>
                    <h2>Hoàn tiền dễ dàng</h2>
                    <p>Trong 30 ngày</p>
                </div>
                <div className="benefit-item">
                    <img src={benefit_3} alt=""/>
                    <h2>Hỗ trợ 24/7</h2>
                    <p>Hỗ trợ nhanh chóng</p>
                </div>
                <div className="benefit-item">
                    <img src={benefit_4} alt=""/>
                    <h2>Giao hàng tận nơi</h2>
                    <p>Dịch vụ tốt nhất</p>
                </div>
            </div>

            <div className="signup-email">
                <img src={email} alt=""/>
                <form className="">
                    <p>Đăng ký nhận email</p>
                    <div className="input-item">
                        <input type="email" placeholder="Nhập email ..."/>
                        <button type="submit">Đăng ký</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Home