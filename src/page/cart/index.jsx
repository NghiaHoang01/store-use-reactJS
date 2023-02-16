import "./Style.css"
import Header from "../../component/header"
import { Link } from "react-router-dom"
import shoe from "../../assets/image/shoe-1.jpg"
const Cart = () => {
    return <>
        <Header page={"Giỏ hàng"} />
        <div className="cart">
            <div className="my-cart">
                <div className="cart__content">
                    <p>Giỏ hàng của bạn</p>
                    <div className="cart__list">
                        <div className="cart__list-quantity">
                            <p>Bạn đang có <span>11 sản phẩm </span>trong giỏ hàng.</p>
                        </div>
                        <div className="cart__list-product">
                            <div className="cart__list-product__item">
                                <div className="cart__list-product__item-img">
                                    <img src={shoe} alt="" />
                                </div>

                                <div className="cart__list-product__item-name">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>Size: 42</p>
                                </div>

                                <div className="cart__list-product__item-quantity">
                                    <a className="btn" href="/">
                                        <i className="fa-solid fa-minus"></i>
                                    </a>
                                    <input type="text" name="quantity" className="form-control" value="1" readonly />
                                    <a className="btn" href="/">
                                        <i className="fa-solid fa-plus"></i>
                                    </a>
                                </div>

                                <div className="cart__list-product__item-price">
                                    <p>3,519,000<sup>đ</sup></p>
                                </div>

                                <div className="cart__list-product__item-buy">
                                    <form action="">
                                        <button type="submit">Mua ngay</button>
                                    </form>
                                </div>

                                <div className="cart__list-product__item-remove">
                                    <a href="/">
                                        <i className="fa-solid fa-trash-can"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="cart__list-product__item">
                                <div className="cart__list-product__item-img">
                                    <img src={shoe} alt="" />
                                </div>

                                <div className="cart__list-product__item-name">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>Size: 42</p>
                                </div>

                                <div className="cart__list-product__item-quantity">
                                    <a className="btn" href="/">
                                        <i className="fa-solid fa-minus"></i>
                                    </a>
                                    <input type="text" name="quantity" className="form-control" value="1" readonly />
                                    <a className="btn" href="/">
                                        <i className="fa-solid fa-plus"></i>
                                    </a>
                                </div>

                                <div className="cart__list-product__item-price">
                                    <p>3,519,000<sup>đ</sup></p>
                                </div>

                                <div className="cart__list-product__item-buy">
                                    <form action="">
                                        <button type="submit">Mua ngay</button>
                                    </form>
                                </div>

                                <div className="cart__list-product__item-remove">
                                    <a href="/">
                                        <i className="fa-solid fa-trash-can"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="cart__list-product__item">
                                <div className="cart__list-product__item-img">
                                    <img src={shoe} alt="" />
                                </div>

                                <div className="cart__list-product__item-name">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>Size: 42</p>
                                </div>

                                <div className="cart__list-product__item-quantity">
                                    <a className="btn" href="/">
                                        <i className="fa-solid fa-minus"></i>
                                    </a>
                                    <input type="text" name="quantity" className="form-control" value="1" readonly />
                                    <a className="btn" href="/">
                                        <i className="fa-solid fa-plus"></i>
                                    </a>
                                </div>

                                <div className="cart__list-product__item-price">
                                    <p>3,519,000<sup>đ</sup></p>
                                </div>

                                <div className="cart__list-product__item-buy">
                                    <form action="">
                                        <button type="submit">Mua ngay</button>
                                    </form>
                                </div>

                                <div className="cart__list-product__item-remove">
                                    <a href="/">
                                        <i className="fa-solid fa-trash-can"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart__list-note">
                        <div className="cart__list-note__items">
                            <p>Ghi chú đơn hàng</p>
                            <textarea cols="10" rows="5"></textarea>
                        </div>

                        <div className="cart__list-note__items">
                            <p>Chính sách đổi trả</p>
                            <div className="cart__list-note__items-note">
                                <i className="fa-solid fa-arrow-right"></i>
                                <p>Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.</p>
                            </div>
                            <div className="cart__list-note__items-note">
                                <i className="fa-solid fa-arrow-right"></i>
                                <p>Sản phẩm còn đủ tem mác, chưa qua sử dụng.</p>
                            </div>
                            <div className="cart__list-note__items-note">
                                <i className="fa-solid fa-arrow-right"></i>
                                <p>Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống.</p>
                            </div>
                            <div className="cart__list-note__items-note">
                                <i className="fa-solid fa-arrow-right"></i>
                                <p>Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày trên toàn hệ
                                    thống.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart__infor">
                    <div className="cart__infor-item">
                        <p>Thông tin đơn hàng</p>
                        <p>Tổng tiền : <span>68,200,000đ</span></p>
                        <Link to="/checkout">Thanh toán</Link>
                    </div>

                    <div className="shopping-continue">
                        <Link to="/shopnow">Tiếp tục mua hàng</Link>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>

            {/* <div className="cart__infor">
                <div className="cart__infor-item">
                    <p>Thông tin đơn hàng</p>
                    <p>Tổng tiền : <span>68,200,000đ</span></p>
                    <Link to="/checkout">Thanh toán</Link>
                </div>

                <div className="shopping-continue">
                    <Link to="/shpnow">Tiếp tục mua hàng</Link>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div> */}
        </div>

        <div className="cart__other-product">
            <p>Có thể bạn sẽ thích</p>
            <Link to="/shopnow">Xem thêm</Link>

            <div className="cart__other-product-list">
                <div className="cart__other-product-list__items">
                    <div className="cart__other-product-list__items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="cart__other-product-list__items-content">
                        <div className="cart__other-product-list__items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="cart__other-product-list__items-content__cart">
                            <Link to="/single">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cart__other-product-list__items">
                    <div className="cart__other-product-list__items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="cart__other-product-list__items-content">
                        <div className="cart__other-product-list__items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="cart__other-product-list__items-content__cart">
                            <Link to="/single">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cart__other-product-list__items">
                    <div className="cart__other-product-list__items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="cart__other-product-list__items-content">
                        <div className="cart__other-product-list__items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="cart__other-product-list__items-content__cart">
                            <Link to="/single">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="cart__other-product-list__items">
                    <div className="cart__other-product-list__items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="cart__other-product-list__items-content">
                        <div className="cart__other-product-list__items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="cart__other-product-list__items-content__cart">
                            <Link to="/single">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Cart