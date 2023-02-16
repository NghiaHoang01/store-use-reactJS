import "./Style.css"
import {Link} from "react-router-dom"

const Error = () => {
    return <>
    <div className="error-page">
            <div className="error-page-title">
                <p>404</p>
                <p>oops! nothing was found</p>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                </p>
            </div>

            <div className="error-page-action">
                <Link to="/">Go to HomePage</Link>
            </div>
        </div>
    </>
}

export default Error