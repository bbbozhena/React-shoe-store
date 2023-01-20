import "./Drawer.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Drawer() {
  const { products } = useSelector((state) => state);
  const filteredProducts = products.filter((product) => product.added === true);

  const dispatch = useDispatch();
  return (
    <>
      <div className="drawer-block">
        <h2>Корзина</h2>
        <div className="basket-item">
          <img src="" alt=""></img>

          {filteredProducts.map((product, i) => (
            <div key={i} className="basket-item-inf">
              <p>{product.id}</p>
              <span></span>
            </div>
          ))}

          <button></button>
        </div>
      </div>
    </>
  );
}

export default Drawer;
