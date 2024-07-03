// Importing necessary modules from 'react'
import { createContext, useState } from "react";

// Defining the interface for the ShoppingCartProvider props
interface ShoppingCartProvider {
  children: React.ReactNode;
}

// Defining the interface for the ShoppingCartContext data
interface ShoppingCartContext {
  cartItems: [];
}

// Creating a context for the shopping cart
// anche in questo modo possiamo settare il type del object che è più pulito
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

// Defining the ShoppingCartProvider component
export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  // Using useState to manage the cartItems state
  // Initializing the cartItems state with an empty array (empty cart)
  // setCartItems is used to update the cartItems state when items are added or removed from the cart
  // The updated cartItems state will be available to all consumers of the ShoppingCartContext
  const [cartItems, setCartItems] = useState<[]>([]);

  // Returning the ShoppingCartContext.Provider with the cartItems state
  return (
    // The ShoppingCartProvider component renders its children, passing the cartItems state as a prop
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {/* The rest of the ShoppingCartProvider component */}
      {children}
    </ShoppingCartContext.Provider>
  );
}
