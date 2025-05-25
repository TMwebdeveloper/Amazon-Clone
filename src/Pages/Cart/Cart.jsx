import React from "react";
import LayOut from "../../Components/LayOut/LayOut";

const Cart = () => {
  return (
    <LayOut hideContent={true}>
      <div>Cart</div> {/* ✅ This will now be hidden */}
    </LayOut>
  );
};

export default Cart;
