import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
    const { cartItems, totalAmount, quantity } = useSelector((state) => state.cart);
  
    if (quantity === 0) {
      return <h2 className="no-items">No items in cart...</h2>;
    }
  
    return (
      <div className="Cart container">
        <h1 className="mt-4" style={{'textAlign':'center','color':'#764abc'}}>My Cart</h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <h2 className="total">Total Amount: ₹{totalAmount.toFixed(2)}</h2>
        <button className="btn btn-warning ">Proceed to buy</button>
      </div>
    );
  };

export default Cart;