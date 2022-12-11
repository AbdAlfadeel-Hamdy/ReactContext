import React, { createContext, useState } from "react";

const ProductsContext = createContext({
  products: [],
  toggleFavoriteHandler: (id) => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);
  const toggleFavoriteHandler = (productId) =>
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id !== productId) return product;
        return { ...product, isFavorite: !product.isFavorite };
      })
    );
  return (
    <ProductsContext.Provider value={{ products, toggleFavoriteHandler }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
