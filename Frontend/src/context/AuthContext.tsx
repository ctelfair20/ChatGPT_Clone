import { ReactNode, createContext, useContext, useEffect, useState } from "react";

type User = {
  name: string
  email: string
};

type UserAuth = {
  isLoggedIn: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // check of user is signed in
  }, []);

  const login = async (email: string, password: string) => { }
  const signup = async (name: string, email: string, password: string) => { }
  const logout = async () => { }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext);