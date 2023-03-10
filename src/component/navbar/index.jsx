import "./Style.css"
import { Link } from "react-router-dom";

import logo from "../../assets/image/logo.png"
import intro_nike from "../../assets/image/intro-nike.jpg"
import intro_adidas from "../../assets/image/intro-adidas.jpg"
import intro_puma from "../../assets/image/intro-puma.jpg"
import intro_lining from "../../assets/image/intro-lining.jpg"
import intro_anta from "../../assets/image/intro-anta.jpg" 

const Navbar = () => {

    // login
    const body = () => {
        return document.querySelector(".login-signup")
    }

    const login = () => {
        return document.querySelector(".login-signup__item")
    }

    const btnLogin = () => {
        body().classList.add("show")
        body().style.animation = "show 0.4s linear"
        login().style.animation = "slideForm 0.4s linear"
    }

    const btnClose = () => {
        body().style.animation = "hide 0.4s linear"
        setTimeout(() => body().classList.remove("show"), 400)
        login().style.animation = "hideForm 0.4s linear"
    }

    // change-form
    const frmLogin = () => {
        return document.querySelector(".login")
    }

    const frmSignUp = () => {
        return document.querySelector(".signup")
    }

    const btnSignUp = () => {
        frmLogin().style.animation = "hideLoginOrSignUp 0.8s linear"
        setTimeout(() => frmLogin().classList.add("hide"), 800)
        setTimeout(() => frmSignUp().classList.remove("hide"), 800)
        frmSignUp().style.animation = "showLoginOrSignUp 0.8s linear"
    }

    const btnLoginFrm = () => {
        frmSignUp().style.animation = "hideLoginOrSignUp 0.8s linear"
        setTimeout(() => frmSignUp().classList.add("hide"), 800)
        setTimeout(() => frmLogin().classList.remove("hide"), 800)
        frmLogin().style.animation = "showLoginOrSignUp 0.8s linear"
    }

    // seacrh
    const modalSearch = () => {
        return document.querySelector(".search-products")
    }

    const btnSearch = () => {
        modalSearch().classList.add("show")
        modalSearch().style.animation = "show 0.5s linear"
    }

    const btnQUit = () => {
        modalSearch().style.animation = "hide 0.5s linear"
        setTimeout(() => modalSearch().classList.remove("show"), 500)
    }

    return <>
        {/* <!-- header --> */}
        <div className="header">
            <div className="header--navbar">
                <div className="header--navbar-logo">
                    <Link to="">
                        <img src={logo} alt="" />
                    </Link>                   
                </div>

                <div className="header--navbar-ul">
                    <ul>
                        <li>
                            <Link to="">Trang ch???</Link>
                        </li>
                        <li>
                            <Link to="/shopnow">
                                S???n ph???m
                                <i className="fa-solid fa-angle-down"></i>
                                <span className="bridge"></span>
                                <ul className="list-products__child">
                                    <li className="products-brand">
                                        <Link to="/shopnow">
                                            Nh??m s???n ph???m ??a c???p
                                            <i className="fa-solid fa-angle-down"></i>
                                        </Link>
                                        <span></span>
                                        <ul>
                                            <li>
                                                <Link to="/shopnow">Gi??y Nike</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">Gi??y Adidas</Link>
                                            </li>Link to="/shopnow"
                                            <li>
                                                <Link to="/shopnow">Gi??y Puma</Link>
                                            </li>Link to="/shopnow"
                                            <li>
                                                <Link to="/shopnow">Gi??y Lining</Link>
                                            </li>Link to="/shopnow"
                                            <li>
                                                <Link to="/shopnow">Gi??y Anta</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="products-hot">
                                        <Link to="/shopnow">
                                            S???n ph???m hot
                                            <i className="fa-solid fa-angle-down"></i>
                                        </Link>
                                        <span></span>
                                        <ul>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m hot 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m hot 2</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m hot 3</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m hot 4</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m hot 5</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="products-new">
                                        <Link to="/shopnow">
                                            S???n ph???m m???i
                                            <i className="fa-solid fa-angle-down"></i>
                                        </Link>
                                        <span></span>
                                        <ul>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m m???i 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m m???i 2</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m m???i 3</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m m???i 4</Link>
                                            </li>
                                            <li>
                                                <Link to="/shopnow">S???n ph???m m???i 5</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li>
                            <Link to="/introduce">
                                Gi???i thi???u
                                <i className="fa-solid fa-angle-down"></i>
                                <span className="bridge"></span>
                                <ul className="list-brand">
                                    <li>
                                        <Link to="/shopnow">
                                            <div className="list-brands__img">
                                                <img src={intro_nike} alt="" />
                                            </div>
                                            <p>Nike</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shopnow">
                                            <div className="list-brands__img">
                                                <img src={intro_adidas} alt="" />
                                            </div>
                                            <p>Adidas</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shopnow">
                                            <div className="list-brands__img">
                                                <img src={intro_puma} alt="" />
                                            </div>
                                            <p>Puma</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shopnow">
                                            <div className="list-brands__img">
                                                <img src={intro_lining} alt="" />
                                            </div>
                                            <p>Lining</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shopnow">
                                            <div className="list-brands__img">
                                                <img src={intro_anta} alt="" />
                                            </div>
                                            <p>Anta</p>
                                        </Link>
                                    </li>
                                </ul>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">Li??n h???</Link>
                        </li>
                        <li>
                            <Link to="/store-system">H??? th???ng c???a h??ng</Link>
                        </li>
                    </ul>
                </div>

                <div className="header--navbar-action">
                    {/* <!-- login & signup --> */}
                    <i id="login" className="fa-solid fa-user" onClick={btnLogin}></i>

                    <div className="login-signup">
                        <div className="login-signup__item">
                            <div className="login-singup__title">
                                <p>T??i kho???n</p>
                                <i id="close" className="fa-solid fa-xmark" onClick={btnClose}></i>
                            </div>

                            {/* <!-- login --> */}
                            <form className="login" action="">
                                <p>????ng nh???p</p>
                                <div className="login-item">
                                    <p>Email</p>
                                    <input type="email" />
                                </div>
                                <div className="login-item">
                                    <p>Password</p>
                                    <input type="password" />
                                </div>
                                <div className="login-orther">
                                    <div className="login-remeber">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </div>
                                    <div className="login-forgot">
                                        <Link to="/forgot-password">
                                            Qu??n m???t kh???u ?
                                        </Link>
                                    </div>
                                </div>
                                <div className="login-submit">
                                    <button type="submit">????ng nh???p</button>
                                </div>
                                <p id="btnSignup" onClick={btnSignUp}>????ng k?? t??i kho???n</p>
                            </form>

                            {/* <!-- signup --> */}
                            <form className="signup hide" action="">
                                <p>????ng k??</p>
                                <div className="signup-item">
                                    <p>T??n ng?????i d??ng</p>
                                    <input type="text" />
                                </div>
                                <div className="signup-item">
                                    <p>Email</p>
                                    <input type="email" />
                                </div>
                                <div className="signup-item">
                                    <p>M???t kh???u</p>
                                    <input type="password" />
                                </div>
                                <div className="signup-item">
                                    <p>Nh???p l???i m???t kh???u</p>
                                    <input type="password" />
                                </div>
                                <div className="signup-submit">
                                    <button type="submit">????ng k??</button>
                                </div>
                                <p id="btnLogin" onClick={btnLoginFrm}>????ng nh???p</p>
                            </form>
                        </div>
                    </div>

                    {/* search */}
                    <i id="search" className="fa-solid fa-magnifying-glass" onClick={btnSearch}></i>
                    <div className="search-products">
                        <form action="">
                            <i className="fa-solid fa-magnifying-glass" ></i>

                            <div className="search-products__input">
                                <input type="text" placeholder="T??m ki???m s???n ph???m ..." />
                                <button type="submit">Search</button>
                            </div>
                            <i id="quit" className="fa-solid fa-xmark" onClick={btnQUit}></i>
                        </form>
                    </div> 

                    {/* <!-- cart --> */}

                    <Link to="/cart">
                        <i className="fa-solid fa-cart-plus">
                            <span>0</span>
                        </i>
                    </Link>
                </div>
            </div>
        </div>


    </>
}

export default Navbar