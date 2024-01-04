import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from '../pages/Login';
import Register from '../pages/register';
import VerifyEmail from '../pages/VerifyEmail';


export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/admin-verify-email" element={<VerifyEmail />}></Route>


          <Route path="/register" element={<Register />}></Route>

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}
