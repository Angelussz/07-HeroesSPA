import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { HeroRouter } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        {/* <Route path='/' element={<HeroRouter />} /> */}
        {/* <Route path='/*' element={<div>Error pAge</div>} /> */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroRouter />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
