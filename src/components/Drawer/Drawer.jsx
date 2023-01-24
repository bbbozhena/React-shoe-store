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
        {filteredProducts.map((product, i) => (
          <div key={i} className="basket-item">
            <img src={`product.img`} alt=""></img>
            <div key={i} className="basket-item-inf">
              <p>{product.title}</p>
              <span></span>
            </div>
          </div>
        ))}

        <button></button>
      </div>
    </>
  );
}

export default Drawer;
