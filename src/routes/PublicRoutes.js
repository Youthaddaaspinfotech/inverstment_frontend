import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from './signin';
import SignUp from './signUp';
import Forgetpassword from './forget_password';
import Otp_verification from './otp_verification';
import Newpassword from './new_password';

const PublicRoutes = () => (
    <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/otp_verification" element={<Otp_verification />} />
        <Route path="/forget_password" element={<Forgetpassword />} />
        <Route path="/new_password" element={<Newpassword />} />
    </Routes>
);

export default PublicRoutes;
