import Header from "../../component/header"
import "./Style.css"

const Contact = () => {
    return <>
    <Header page={"Liên hệ"}/>
    <div className="contact">
            <div className="contact__title">
                <h1>Liên hệ</h1>
            </div>

            <div className="contact__content">
                <div className="contact__content-form">
                    <p>Please fill this form to contact with us</p>
                    <form action="" className="contact-form">
                        <div className="input">
                            <div className="input-item">
                                <p>User name</p>
                                <input type="text" />
                            </div>
                            <div className="input-item">
                                <p>Telephone</p>
                                <input type="number" />
                            </div>
                        </div>
                        <div className="input">
                            <div className="input-item">
                                <p>Email</p>
                                <input type="email" />
                            </div>
                            <div className="input-item">
                                <p>Subject</p>
                                <input type="text" />
                            </div>
                        </div>
                        <textarea cols="30" rows="10" placeholder="Message..."></textarea>
                        <div className="form__action">
                            <button type="submit">Submit</button>
                            <button type="reset">Clear</button>
                        </div>
                    </form>
                </div>

                <div className="contact__content-info">
                    <p>Contact Information</p>
                    <div className="info-item">
                        <div className="info-item__icon">
                            <i className="fa-solid fa-house-chimney"></i>
                        </div>
                        <div className="info-describe">
                            <h4>Visit us</h4>
                            <p>Vo Van Ngan, Thu Duc District, Ho Chi Minh City</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item__icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="info-describe">
                            <h4>Mail us</h4>
                            <p>19110091@student.hcmute.edu.vn</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item__icon">
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="info-describe">
                            <h4>Call us</h4>
                            <p>0888346324</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-item__icon">
                            <i className="fa-solid fa-fax"></i>
                        </div>
                        <div className="info-describe">
                            <h4>Fax</h4>
                            <p>0888346324</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4841606803075!2d106.76240491477206!3d10.850732092271128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bd7417401d%3A0xe87fb2433d012c99!2zxJAuIFbDtSBWxINuIE5nw6JuLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1666001271988!5m2!1svi!2s"
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            </div>
        </div>
    </>
}

export default Contact