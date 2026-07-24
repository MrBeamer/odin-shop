import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import TopBar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import ProductListingPage from "./pages/ProductListingPage/ProductListingPage";

function App() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOpenCart = () => {
    setOpen(true);
  };
  const handleCloseCart = () => setOpen(false);

  const handleAddCart = (product) => {
    const isDuplicate = cart.some(
      (productCart) => productCart.id === product.id,
    );
    // Open cart when Item is added to cart
    handleOpenCart();
    //when duplicate add one to the quantity
    if (isDuplicate) {
      setCart((prevCart) => {
        return prevCart.map((productCart) => {
          if (productCart.id === product.id) {
            return { ...productCart, quantity: productCart.quantity + 1 };
          } else {
            return productCart;
          }
        });
      });
      return;
    }
    //if no duplicate add product and add to this product quantity 1
    setCart((prevCart) => [{ ...product, quantity: 1 }, ...prevCart]);
  };

  const handleRemoveCartItem = (clickedCartItem) => {
    const filteredCart = cart.filter((product) => {
      return product.id !== clickedCartItem.id;
    });
    setCart(filteredCart);
  };

  const handleIncreaseQuantity = (clickedCartItem) => {
    setCart((prevCart) => {
      return prevCart.map((productCart) => {
        if (productCart.id === clickedCartItem.id) {
          return {
            ...productCart,
            quantity: productCart.quantity + 1,
          };
        } else {
          return productCart;
        }
      });
    });
  };
  const handleDecreaseQuantity = (clickedCartItem) => {
    setCart((prevCart) => {
      if (clickedCartItem.quantity === 1) {
        return prevCart.filter((productCart) => {
          return productCart.id !== clickedCartItem.id;
        });
      }
      return prevCart.map((productCart) => {
        if (productCart.id === clickedCartItem.id) {
          return { ...productCart, quantity: productCart.quantity - 1 };
        } else {
          return productCart;
        }
      });
    });
    console.log(clickedCartItem);
  };

  return (
    <>
      <TopBar />
      <Navigation onCartClick={handleOpenCart} cart={cart} />
      <Cart
        cart={cart}
        open={open}
        onClose={handleCloseCart}
        onRemove={handleRemoveCartItem}
        onDecrease={handleDecreaseQuantity}
        onIncrease={handleIncreaseQuantity}
      />
      <main id="center">
        <Routes>
          <Route path="/" element={<Home onCartAdd={handleAddCart} />}></Route>
          <Route
            path=":category"
            element={<ProductListingPage onCartAdd={handleAddCart} />}
          ></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
