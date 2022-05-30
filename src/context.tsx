import React, { useState, createContext } from 'react';

export const Context = createContext<[string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>] | undefined>(undefined);

const UserProvider: React.FC = ({ children }) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <Context.Provider value={[value, setValue]}>{children}</Context.Provider>
  );
};

export default UserProvider;
