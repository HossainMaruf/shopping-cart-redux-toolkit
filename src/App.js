import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen} = useSelector((store) => store.modal);
  useEffect(
    function () {
      dispatch(calculateTotals());
    },
    [cartItems]
  );

  useEffect(function() {
      dispatch(getCartItems());
  }, []);

  if(isLoading) {
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }

  return (
    <main>
      {isOpen && <Modal/> }
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
