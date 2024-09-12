import cartContext from "./CartContext"
import { useState } from "react";
const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const isExist = cartItems.find(cart => cart.id === item.id);
        if (isExist) {
            setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? item : cartItem))
        }
        else {
            setCartItems((prev) => [...prev, item]);
        }
    }

    const removeFromCart = (id) => {
        const cart = cartItems.filter((ele) => ele.id !== id)
        setCartItems(cart);
    }

    return (
        <cartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            cartItemsLength: cartItems.length
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider;