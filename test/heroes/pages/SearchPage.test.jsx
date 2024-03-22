import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
describe("Pruebas en <SearchPage />", () => {
    beforeEach(()=>jest.clearAllMocks())
  test("debe mostrar correctamente los valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  test("debe mostrar a batman y el input con valor de queryString", () => {
    render(
      <MemoryRouter initialEntries={["search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");
    const img = screen.getByRole("img");
    expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
    // console.log(screen.getByText("Search Hero"))
    expect(screen.getByText("Search Hero").style.display).toContain("none");
  });
  test("debe de mostrar un error si no se encuentra el hero(batman123)", () => {
    render(
      <MemoryRouter initialEntries={["search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    expect(screen.getByText("Search Hero").style.display).toContain("none");
    expect(
      screen.getByText("No hay resultados con el heroe").style.display
    ).not.toContain("none");
  });
  test("debe de llamar el navigate a la pantalla nueva", () => {
    const inputValue = "superman"
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: {
        name: "searchText",
        value: inputValue
      },
    });
    const formHero = screen.getByLabelText("formHero");
    fireEvent.submit(formHero);
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
  });
});
