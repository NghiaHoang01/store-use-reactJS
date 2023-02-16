import "./Style.css"
import shoe from "../../assets/image/shoe-1.jpg"
import {Link} from "react-router-dom"

const Result = () => {
    return <>
        <div className="result">
            <p>Tìm kiếm</p>
            <div className="result__search">
                <p>Có <span>2</span> sản phẩm cho tìm kiếm</p>
                <p>Kết quả tìm kiếm cho <span>"run"</span></p>
            </div>

            <div className="result__list">
                <div className="result__list-items">
                    <div className="result__list-items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="result__list-items-content">
                        <div className="result__list-items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="result__list-items-content__cart">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="result__list-items">
                    <div className="result__list-items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="result__list-items-content">
                        <div className="result__list-items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="result__list-items-content__cart">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="result__list-items">
                    <div className="result__list-items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="result__list-items-content">
                        <div className="result__list-items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="result__list-items-content__cart">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="result__list-items">
                    <div className="result__list-items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="result__list-items-content">
                        <div className="result__list-items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="result__list-items-content__cart">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="result__list-items">
                    <div className="result__list-items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="result__list-items-content">
                        <div className="result__list-items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="result__list-items-content__cart">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="result__list-items">
                    <div className="result__list-items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="result__list-items-content">
                        <div className="result__list-items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="result__list-items-content__cart">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="result__list-items">
                    <div className="result__list-items__img">
                        <img src={shoe} alt="" />
                        <Link to="/single">
                            Chi tiết
                        </Link>
                    </div>

                    <div className="result__list-items-content">
                        <div className="result__list-items-content__inf">
                            <Link to="/single">
                                <p>Nike Pegasus FlyEase</p>
                                <p>3,519,000<sup>đ</sup></p>
                            </Link>
                        </div>
                        <div className="result__list-items-content__cart">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="paging">
                <div className="paging-item">
                    <a href="/">
                        <i className="fa-solid fa-arrow-left"></i>
                    </a>
                    <a href="/" style={{opacity:"1"}}>
                        <span>1</span>
                    </a>
                    <a href="/">
                        <span>2</span>
                    </a>
                    <a href="/">
                        <span>3</span>
                    </a>
                    <a href="/">
                        <span>4</span>
                    </a>
                    <a href="/">
                        <span>5</span>
                    </a>
                    <a href="/">
                        <span>6</span>
                    </a>
                    <a href="/">
                        <span>7</span>
                    </a>
                    <a href="/">
                        <span>8</span>
                    </a>
                    <a href="/">
                        <span>9</span>
                    </a>
                    <a href="/">
                        <span>10</span>
                    </a>
                    <a href="/">
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </>
}
export default Result