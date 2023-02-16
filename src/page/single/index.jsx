import "./Style.css"
import Header from "../../component/header"
import { Link } from "react-router-dom"

import shoe1 from "../../assets/image/shoe-1.jpg"
import shoe2 from "../../assets/image/shoe-1a.jpg"
import shoe3 from "../../assets/image/shoe-1c.jpg"
import shoe4 from "../../assets/image/shoe-1d.jpg"

const Single = () => {
    // image detail
    const imgChilds = document.querySelectorAll(".single__img-child__item > img")
    const imgContent = document.querySelector(".single__img-content")

    window.addEventListener("DOMContentLoaded", () => {
        imgChilds[0].parentElement.classNameList.add("bold")
    })

    imgChilds.forEach((img) => {
        img.addEventListener("mouseover", () => {
            imgContent.querySelector("img").src = img.src
            resetBold()
            img.parentElement.classNameList.add("bold")
        })
    })

    const resetBold = () => {
        imgChilds.forEach((img) => {
            img.parentElement.classNameList.remove("bold")
        })
    }

    // quantity
    let quantity = () => {
        return document.getElementById("quantity")
    }

    let valueQuantity = () => {
        return +document.getElementById("quantity").value
    }

    const handelDecre = () =>  {
        if (quantity().value > 1) {
            valueQuantity().value--
            quantity().value = valueQuantity()
        }
        else {
            quantity().value = 1
        }
    }

    const handleIncre = () => {
        valueQuantity().value++
        quantity().value = valueQuantity()
    }

    return <>
        <Header page={"tên sản phẩm"} />
        <div className="single">
            <div className="single-item">
                <div className="single__img">
                    <div className="single__img-child">
                        <div className="single__img-child__item">
                            <img src={shoe1} alt="" />
                        </div>
                        <div className="single__img-child__item">
                            <img src={shoe2} alt="" />
                        </div>
                        <div className="single__img-child__item">
                            <img src={shoe3} alt="" />
                        </div>
                        <div className="single__img-child__item">
                            <img src={shoe4} alt="" />
                        </div>
                    </div>
                    <div className="single__img-content">
                        <img src={shoe1} alt="" />
                    </div>
                </div>

                <div className="single__content">
                    <div className="single__content-descrip">
                        <p>
                            Nike Pegasus FlyEase
                        </p>
                        <p>
                            3,519,000
                            <sup>đ</sup>
                        </p>
                        <p>Let the Nike Pegasus FlyEase, a balanced and energised ride for any run, help you ascend to new
                            heights.
                            A supportive sensation helps keep your foot contained, while underfoot Air adds a pop to your
                            step as you transition from heel to toe.
                        </p>
                    </div>

                    <form action="" method="post">
                        <div className="single__content-size">
                            <p>Select size</p>

                            <input type="radio" name="radio" id="size38" checked />
                            <label for="size38">38</label>

                            <input type="radio" name="radio" id="size39" />
                            <label for="size39">39</label>

                            <input type="radio" name="radio" id="size40" />
                            <label for="size40">40</label>

                            <input type="radio" name="radio" id="size41" />
                            <label for="size41">41</label>

                            <input type="radio" name="radio" id="size42" />
                            <label for="size42">42</label>

                            <input type="radio" name="radio" id="size43" />
                            <label for="size43">43</label>
                        </div>

                        <div className="single__content-quantity">
                            <p>Quantity</p>
                            <button id="decre" type="button" onClick={handelDecre}>-</button>
                            <input id="quantity" type="text" readonly value="1" />
                            <button id="incre" type="button" onClick={handleIncre}>+</button>
                        </div>

                        <div className="single__content-action">
                            <button type="submit">Thêm vào giỏ </button>
                            <button type="button">Mua ngay</button>
                        </div>
                    </form>
                </div>

            </div>

            <div className="single-orther">
                <p>Sản phẩm liên quan</p>

                <div className="single-orther__list-product">
                    <div className="single-orther__list-product__items">
                        <div className="single-orther__list-product__items__img">
                            <img src={shoe1} alt="" />
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="single-orther__list-product__items-content">
                            <div className="single-orther__list-product__items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="single-orther__list-product__items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="single-orther__list-product__items">
                        <div className="single-orther__list-product__items__img">
                            <img src={shoe1} alt="" />
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="single-orther__list-product__items-content">
                            <div className="single-orther__list-product__items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="single-orther__list-product__items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="single-orther__list-product__items">
                        <div className="single-orther__list-product__items__img">
                            <img src={shoe1} alt="" />
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="single-orther__list-product__items-content">
                            <div className="single-orther__list-product__items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="single-orther__list-product__items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="single-orther__list-product__items">
                        <div className="single-orther__list-product__items__img">
                            <img src={shoe1} alt="" />
                            <Link to="/single">
                                Chi tiết
                            </Link>
                        </div>

                        <div className="single-orther__list-product__items-content">
                            <div className="single-orther__list-product__items-content__inf">
                                <Link to="/single">
                                    <p>Nike Pegasus FlyEase</p>
                                    <p>3,519,000<sup>đ</sup></p>
                                </Link>
                            </div>
                            <div className="single-orther__list-product__items-content__cart">
                                <Link to="/single">
                                    <i className="fa-solid fa-cart-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Xem lại JS */}
    </>
}

export default Single