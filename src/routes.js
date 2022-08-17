import React from 'react';
import { Routes, Route }  from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import ForgotPassword from './pages/ForgotPassword';
import Charts from './pages/Charts';
import Apuracao from './pages/Apuracao';

export default function MainRoutes() {
    return(
        <Routes>
            <Route path="/login/:idMov/:idAno" element={<Login />} />
            <Route path="/home/:parMov/:parAno" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/charts/:idEnq/:idAno" element={<Charts />} />
            <Route path="/apuracao/:idAno" element={<Apuracao />} />
        </Routes>
    )
}