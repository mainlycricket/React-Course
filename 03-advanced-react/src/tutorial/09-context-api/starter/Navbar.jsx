import { useState, createContext, useContext } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

// custom hook
export function useNavContext() {
  return useContext(NavbarContext);
}

const Navbar = () => {
  const [user, setUser] = useState({ name: 'tushar' });

  function logout() {
    setUser(null);
  }

  function login() {
    setUser({ name: 'tushar' });
  }

  return (
    <NavbarContext.Provider value={{ user, login, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};
export default Navbar;
