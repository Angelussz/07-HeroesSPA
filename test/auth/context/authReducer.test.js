import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Pruebas en función authReducer", () => {
  const state = { logged: false };
  test("Debe retornar el estado por defecto", () => {
    const action = {};

    const result = authReducer(state, action);
    expect(result).toEqual(state);
  });
  test("Debe de (login) llamar al login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name: "Angelo Perez",
      },
    };

    const result = authReducer(state, action);
    expect(result).toEqual({
      ...state,
      logged: true,
      user: action.payload,
    });
  });
  test("Debe de (logout) borrar el name del usuario", () => {
    const state2 = {
      logged: true,
      id: "ABC",
      name: "Angelo Perez",
    };

    const action2 = {
      type: types.logout,
    };
    const result2 = authReducer(state2, action2);
    expect(result2).not.toEqual(state2);
  });
});
