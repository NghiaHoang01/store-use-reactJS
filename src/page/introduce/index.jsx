import Header from "../../component/header"
import "./Style.css"
import about_us from "../../assets/image/about-us.jpg"
import about_skill from "../../assets/image/about-skill.jpg"
const Introduce = () => {
    return <>
        <Header page={"Giới thiệu"} />
        <div className="about">
            {/* <!-- title --> */}
            <div className="title">
                <h1>Giới thiệu</h1>
            </div>

            {/* <!-- welcome-to --> */}
            <div className="welcome-to">
                <div className="welcome-to__img">
                    <img src={about_us} alt="" />
                </div>
                <div className="welcome-to_title">
                    <h2>Chào mừng bạn đến với Fashion Shoes</h2>
                    <p>
                        Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut
                        laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat
                        purus viverra sit amet. Quisque lacinia quam sed tortor interdum,
                        malesuada congue nunc ornare. Cum sociis In semper lorem eget tortor
                        pulvinar ultricies.
                    </p>
                    <p>
                        Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut
                        laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat
                        purus viverra sit amet. Quisque lacinia quam sed tortor interdum,
                        malesuada congue nunc ornare. Cum sociis . In semper lorem eget
                        tortor pulvinar ultricies.
                    </p>
                </div>
            </div>

            {/* <!-- introduce --> */}
            <div className="introduce">
                {/* <!-- member --> */}
                <div className="introduce__member">
                    <h2>Who We Are</h2>

                    <div className="introduce__member-item">
                        <div className="introduce__member-item-title">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <label for="acc1">
                                <p>Group Member</p>
                            </label>
                        </div>
                        <div className="introduce__member-item-describe">
                            <p>
                                Three in One Squad consists of Nghia, Dat and Phong , we
                                specialize in making websites about renting or buying certain
                                products in real life topics for students studying Information
                                Technology and Web Programming. As a student myself, we know how
                                difficult it is for you to successfully understand this subject.
                                Since September 2021, we have been refining our skills in java
                                web programming.
                            </p>
                        </div>
                    </div>

                    <div className="introduce__member-item">
                        <div className="introduce__member-item-title">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <label for="acc2">
                                <p>Hoàng Đại Nghĩa</p>
                            </label>
                        </div>
                        <div className="introduce__member-item-describe">
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="introduce__member-item">
                        <div className="introduce__member-item-title">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <label for="acc3">
                                <p>Member 2</p>
                            </label>
                        </div>
                        <div className="introduce__member-item-describe">
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="introduce__member-item">
                        <div className="introduce__member-item-title">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <label for="acc4">
                                <p>Member 3</p>
                            </label>
                        </div>
                        <div className="introduce__member-item-describe">
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- skills --> */}
                <div className="introduce__skills" style={{backgroundImage: `url(${about_skill})`}}>
                    <div className="introduce__skills-content">
                        <h2>Our Skills</h2>
                        <div className="introduce__skills-content-item one">
                            <h4>Development</h4>
                            <h4>95%</h4>
                        </div>
                        <div className="introduce__skills-content-item two">
                            <h4>Pricing</h4>
                            <h4>85%</h4>
                        </div>
                        <div className="introduce__skills-content-item three">
                            <h4>Production</h4>
                            <h4>90%</h4>
                        </div>
                        <div className="introduce__skills-content-item four">
                            <h4>Advertising</h4>
                            <h4>86%</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Thiếu JS */}
    </>
}

export default Introduce