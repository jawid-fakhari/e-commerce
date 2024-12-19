// Importing necessary modules from 'react'
import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Definizione delle interfacce: Queste interfacce definiscono la struttura dei dati e dei props utilizzati nel componente.
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
    getCartItemsQty: number;
    isLogin: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}

//Creazione del contesto:
// Viene creato un contesto React per il carrello della spesa.
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

//Hook personalizzato: Questo hook personalizzato permette un facile accesso al contesto in altri componenti.
export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
};

// Componente ShoppingCartProvider:Questo è il componente principale che gestisce lo stato del carrello e fornisce funzionalità relative.********
export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "cartItems",
        []
    );

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
        setCartItems((currentItems) => {
            selectedItem = currentItems.find((item) => item.id == id);
            if (selectedItem?.quantity === 1) {
                return currentItems.filter((item) => item.id !== id); // remove item from cartItems if quantity is 1
            }
            if (selectedItem == null) {
                return [...currentItems];
            } else {
                return currentItems.map((item) => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getProductQty = (id: number) => {
        return cartItems.find((item) => item.id == id)?.quantity || 0;
    };

    const handleRemoveItemFromCart = (id: number) => {
        setCartItems((currentItems) =>
            currentItems.filter((item) => item.id != id)
        );
    };

    const getCartItemsQty = cartItems.reduce(
        (totalQty, item) => totalQty + item.quantity,
        0
    );

    const [isLogin, setIsLogin] = useState(true); // TODO: ritorna questo a false

    const handleLogin = () => {
        setIsLogin(true);
    };
    const handleLogout = () => {
        setIsLogin(false);
    };

    // Returning the IShoppingCartContext.Provider with the cartItems state
    return (
        // The ShoppingCartProvider component renders its children, passing the cartItems state as a prop
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                handleIncreaseProductQty,
                handleDecreaseProductQty,
                getProductQty,
                handleRemoveItemFromCart,
                getCartItemsQty,
                isLogin,
                handleLogin,
                handleLogout,
            }}
        >
            {/* The rest of the ShoppingCartProvider component */}
            {children}
        </ShoppingCartContext.Provider>
    );
}
