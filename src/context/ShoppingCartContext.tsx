// Importing necessary modules from 'react'
import { createContext, useContext, useState } from "react";

// Defining the interface for the ShoppingCartProvider props
interface ShoppingCartProvider {
  children: React.ReactNode;
}

// Defining the interface for a cart item
interface CartItem {
  id: number;
  quantity: number;
}

// Defining the interface for the ShoppingCartContext data
interface ShoppingCartContext {
  cartItems: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveItemFromCart: (id: number) => void;
}

// Creating a context for the shopping cart
// export const ShoppingCartContext = createContext<ShoppingCartContext>( {cartItems: []});
// anche in questo modo possiamo settare il type del object che è più pulito
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

// Defining the IShoppingCartProvider component
export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  // Using useState to manage the cartItems state
  // Initializing the cartItems state with an empty array (empty cart)
  // setCartItems is used to update the cartItems state when items are added or removed from the cart
  // The updated cartItems state will be available to all consumers of the IShoppingCartContext
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Function to add an item to the cart
  let selectedItem;
  const handleIncreaseProductQty = (id: number) => {
    // find the product in cartItems by its id, increment its quantity, and update the cartItems state
    setCartItems((currentItems) => {
      
      selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem == null) {
        return [...currentItems, { id: id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems)=> {

      selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem?.quantity === 1) {
        return currentItems.filter((item) => item.id!== id);  // remove item from cartItems if quantity is 1
      }
      if(selectedItem == null) {
        return [...currentItems]
      }else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.quantity || 0;
  };

  const handleRemoveItemFromCart = (id: number) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id != id))
  };

  // Returning the IShoppingCartContext.Provider with the cartItems state
  return (
    // The ShoppingCartProvider component renders its children, passing the cartItems state as a prop
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty, getProductQty, handleRemoveItemFromCart }}
    >
      {/* The rest of the ShoppingCartProvider component */}
      {children}
    </ShoppingCartContext.Provider>
  );
}
