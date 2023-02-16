import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import DefaultLayout from './component/DefaultLayout';
import ForgotPass from './page/forgotPass';
import ResetPass from './page/resetPass';
import Checkout from './page/checkout';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<DefaultLayout/>}/>
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/forgot-password' element={<ForgotPass />} />
          <Route path='/reset-pass' element={<ResetPass />} />
          <Route path='/reset-pass' element={<ResetPass />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
