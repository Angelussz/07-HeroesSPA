import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../../src/router/AppRouter";

describe("Prueba en <AppRouter />", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    screen.debug();
    expect(screen.getAllByText("Login")).toBeTruthy()
  });
  test('debe de mostrar el componente de marvel si esta autenticado', () => {
    const contextValue = {
        logged: true,
        user:{
            id:"123",
            name:"Angelo Perez"
        }
      };
      render(
        <AuthContext.Provider value={contextValue}>
          <MemoryRouter initialEntries={["/marvel"]}>
            <AppRouter />
          </MemoryRouter>
        </AuthContext.Provider>
      );
      screen.debug();
      expect(screen.getByText("MarvelPage")).toBeTruthy()
  })
  
});
