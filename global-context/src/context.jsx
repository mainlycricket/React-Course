import { useState, createContext, useContext } from 'react';

const GlobalContext = createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

const AppContext = ({ children }) => {
  const [name, setName] = useState('tushar');

  function toggleName(name) {
    setName(name);
  }

  return (
    <GlobalContext.Provider value={{ name, toggleName }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
