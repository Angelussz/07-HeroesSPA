import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { PublicRoute } from "../../../src/router/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Pruebas en <PublicRoute />", () => {
  test("debe mostrar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );
    // screen.debug()
    expect(screen.getByText("Ruta pública")).toBeTruthy();
  });
  test("debe mostrar si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Angelo Perez",
        id: "123",
      },
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              }
            />
            <Route path="/" element={<h1>PAgina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    // screen.debug();
    // expect(screen.getByText("PAgina Marvel")).toBeTruthy()
  });
});
