import { fireEvent, render, screen } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter, useNavigate} from "react-router-dom"
import { Navbar } from "../../../src/ui"
const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom",()=>({
    ...jest.requireActual("react-router-dom"),
    useNavigate:()=>mockedUseNavigate
}))

describe('Pruebas en <Navbar />', () => {
    const contextValue = {
        logged:true,
        user:{
            name:"Angelo Perez"
        },
        logout:jest.fn()
    }
    beforeEach(()=> jest.clearAllMocks())
  test('Debe de mostrar el nombre del usuario', () => {
    render(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter >
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    )
    // screen.debug();
    expect(screen.getByText("Angelo Perez")).toBeTruthy()
  })
  test('Debe de llamar a logout y Navigation', () => {
    render(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter >
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    )
    // screen.debug();
    const buttonLogout = screen.getByRole("button")
    fireEvent.click(buttonLogout);
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login",{"replace":true})
  })
})
