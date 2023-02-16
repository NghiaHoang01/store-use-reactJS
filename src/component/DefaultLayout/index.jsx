import { Route, Routes } from 'react-router-dom';
import Footer from '../footer';
import Navbar from '../navbar';
import ShopNow from '../../page/shopnow';
import Introduce from "../../page/introduce";
import Contact from '../../page/contact';
import StoreSystem from "../../page/storeSystem";
import Home from '../../page/home';
import Single from "../../page/single";
import Cart from "../../page/cart";
import ForgotPass from '../../page/forgotPass';
import ResetPass from '../../page/resetPass';
import Thank from "../../page/thank"
import ValidateOTP from "../../page/validateOTP"
import Error from "../../page/error404";
import Result from "../../page/result"

const DefaultLayout = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/shopnow' element={<ShopNow />} />
                <Route path='/introduce' element={<Introduce />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/store-system' element={<StoreSystem />} />
                <Route path='/single' element={<Single />} />
                <Route path='/cart' element={<Cart />} />
          <Route path='/result' element={<Result />} />
                <Route path='/thank' element={<Thank />} />
                <Route path='/forgot-password' element={<ForgotPass />} />
                <Route path='/reset-pass' element={<ResetPass />} />
                <Route path='/reset-pass' element={<ResetPass />} />
                <Route path='/validate-otp' element={<ValidateOTP />} />
                <Route path='/*' element={<Error />} />
            </Routes>
            <Footer />

        </>
    );
}

export default DefaultLayout;
