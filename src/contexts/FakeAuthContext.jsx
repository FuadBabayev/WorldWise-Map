import { createContext, useContext, useReducer } from "react";

/* eslint-disable*/
const AutContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "logout":
      return { ...state, isAuthenticated: false, user : state.user /* OR just ...initialState */ };
    default:
      throw new Error("Unknown action type");
  }
}

const FAKE_USER = {
  name: "Fuad",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(reducer,initialState);
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <>
      <AutContext.Provider value={{ user, isAuthenticated, login, logout, FAKE_USER }}>
        {children}
      </AutContext.Provider>
    </>
  );
}

function useAuth() {
  const context = useContext(AutContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}


export {AuthProvider, useAuth};