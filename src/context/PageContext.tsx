import React, { useState, createContext } from "react";

interface ContextProps {
  children: React.ReactNode;
}

export type PageContextType = {
  currentPage: number;
  setCurrentPage: (c: number) => void;
};

export const PageContext = createContext<PageContextType>({
  currentPage: 1,
  setCurrentPage: () => {},
} as PageContextType);

export const PageContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const value = { currentPage, setCurrentPage };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
