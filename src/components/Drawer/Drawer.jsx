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
        <div className=" justify-center align-center">
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="basket-item d-flex justify-center align-center "
            >
              <img src={`${product.img}`} width={80} height={80} alt=""></img>
              <div key={i} className="basket-item-inf">
                <p>{product.title}</p>
                <span>{product.price}</span>
              </div>
              <button className="ml-1"></button>
            </div>
          ))}
        </div>
        <p className=" mt-10">Загальна вартість:</p>
      </div>
    </>
  );
}

export default Drawer;
