import { createContext, useState } from "react";

export const ProductContext = createContext();

const [filters, setFilters] = useState({
  categori: "all",
});

export function FilterProvider({Children}) {
  return (
    <ProductContext.Provider value={{filters , setFilters}}>
        {Children}
    </ProductContext.Provider>
  )
}


