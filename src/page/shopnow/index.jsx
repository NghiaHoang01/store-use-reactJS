import "./Style.css"
import Header from "../../component/header"
import { Link } from "react-router-dom"
import shoe from "../../assets/image/shoe-1.jpg"

const ShopNow = () => {
    const select = () => {
        return document.getElementById("select-pro")
    }
    const icon = () => {
        return document.getElementById("rotate")
    }
    const option = () => {
        return document.getElementById("options")
    }
    let click = true

    const handleSelect = () => {
        if (click) {
            select().style.border = "1px solid var(--dark-primary-color)"
            icon().style.animation = "rotate 0.3s linear"
            icon().style.transform = "rotate(0deg)"
            click = false
            option().classList.add("show-option")
            option().style.animation = "showSelect 0.5s linear"
        }
        else {
            select().style.border = "1px solid var(--border)"
            icon().style.animation = "reRotate 0.3s linear"
            icon().style.transform = "rotate(90deg)"
            click = true
            option().style.animation = "hideSelect 0.5s linear"
            setTimeout(() => option().classList.remove("show-option"), 500)
        }
    }

    return <>
        <Header page={"Sản phẩm"} />
        {/* <!--body--> */}
        <div className="shop-now">
            <div className="shop-now__slidebar">
                {/* <!-- title --> */}
                <div className="shop-now__slidebar-title">
                    <p>Chuyển trang -</p>
                    <Link to="">
                        Trang chủ
                    </Link>
                    <Link to="/shopnow">
                        Tất cả sản phẩm
                    </Link>
                    <Link to="/introduce">
                        Giới thiệu
                    </Link>
                    <Link to="/contact">
                        Liên hệ
                    </Link>
                    <Link to="/store-system">
                        Hệ thống cửa hàng
                    </Link>
                </div>

                {/* <!-- search --> */}
                <div className="shop-now__slidebar-range">
                    <p>Giá sản phẩm <span>(vnd)</span> </p>
                    <form action="" method="post">
                        <div className="shop-now__slidebar-range__input">
                            <div className="shop-now__slidebar-range__input-item">
                                <input type="number" />
                            </div>
                            <span>
                                <i className="fa-solid fa-window-minimize"></i>
                            </span>
                            <div className="shop-now__slidebar-range__input-item">
                                <input type="number" />
                            </div>
                        </div>
                        <div className="shop-now__slidebar-range__action">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>

                {/* <!-- brand --> */}
                <div className="shop-now__slidebar-brand">
                    <p>Thương hiệu <span>-</span></p>
                    <div className="shop-now__slidebar-brand__item">
                        <Link to="/shopnow">
                            + Tất cả sản phẩm
                            <span>(1)</span>
                        </Link>
                        <Link to="/shopnow">
                            + Nike
                            <span>(1)</span>
                        </Link>
                        <Link to="/shopnow">
                            + Adidas
                            <span>(1)</span>
                        </Link>
                        <Link to="/shopnow">
                            + Puma
                            <span>(1)</span>
                        </Link>
                        <Link to="/shopnow">
                            + Lining
                            <span>(1)</span>
                        </Link>
                        <Link to="/shopnow">
                            + Anta
                            <span>(1)</span>
                        </Link>
                    </div>
                </div>

                {/* <!-- hot-deal --> */}
                <div className="shop-now__slidebar-hot-deal">
                    <p>Sản phẩm bán chạy -</p>
                    <div className="shop-now__slidebar-hot-deal__item">
                        <Link to="/single">
                            <div className="shop-now__slidebar-hot-deal__item-img">
                                <img src={shoe} alt="" />
                            </div>
                            <div className="shop-now__slidebar-hot-deal__item-title">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </div>
                        </Link>
                    </div>
                    <div className="shop-now__slidebar-hot-deal__item">
                        <Link to="/single">
                            <div className="shop-now__slidebar-hot-deal__item-img">
                                <img src={shoe} alt="" />
                            </div>
                            <div className="shop-now__slidebar-hot-deal__item-title">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </div>
                        </Link>
                    </div>
                    <div className="shop-now__slidebar-hot-deal__item">
                        <Link to="/single">
                            <div className="shop-now__slidebar-hot-deal__item-img">
                                <img src={shoe} alt="" />
                            </div>
                            <div className="shop-now__slidebar-hot-deal__item-title">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* <!-- lastest-product --> */}
                <div className="lastest-product">
                    <p>Lastest Product</p>
                    <div className="lastest-product__item">
                        <div className="lastest-product__item__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="lastest-product__item-content">
                            <div className="lastest-product__item-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="lastest-product__item-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- content --> */}
            <div className="shop-now__content">
                <div className="shop-now__content-title">
                    <p>Tất cả sản phẩm</p>
                    <div id="select-pro" className="shop-now__content-select" onClick={handleSelect}>
                        <div className="shop-now__content-select__title">
                            <p>Giá: Tăng dần</p>
                            <i id="rotate" className="fa-solid fa-chevron-down"></i>
                        </div>
                        <div id="options" className="shop-now__content-select__items">
                            <Link to="/shopnow">
                                Giá: Tăng dần
                            </Link>
                            <Link to="/shopnow">
                                Giá: Giảm dần
                            </Link>
                            <Link to="/shopnow">
                                Tên: A-Z
                            </Link>
                            <Link to="/shopnow">
                                Tên: Z-A
                            </Link>
                            <Link to="/shopnow">
                                Cũ nhất
                            </Link>
                            <Link to="/shopnow">
                                Mới nhất
                            </Link>
                            <Link to="/shopnow">
                                Bán chạy nhất
                            </Link>
                            <Link to="/shopnow">
                                Tồn kho: Giảm dần
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <!-- list-product --> */}
                <div className="shop-now__content-list-product">
                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="shop-now__content-list-product_items">
                        <div className="shop-now__content-list-product_items__img">
                            <img src={shoe} alt="" />
                            {/* <img className="img-hover" src="./Img/shoe-1a.jpg" alt=""> */}
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="shop-now__content-list-product_items-content">
                            <div className="shop-now__content-list-product_items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="shop-now__content-list-product_items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="paging">
                    <div className="paging-item">
                        <Link to="/shopnow">
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                        <Link to="/shopnow" style={{ opacity: "1" }}>
                            <span>1</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>2</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>3</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>4</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>5</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>6</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>7</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>8</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>9</span>
                        </Link>
                        <Link to="/shopnow">
                            <span>10</span>
                        </Link>
                        <Link to="/shopnow">
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ShopNow