import "./Drawer.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE, TOTAL } from "../../store/productSlice";
import { useState } from "react";
import { useEffect } from "react";

function Drawer() {
  const { products } = useSelector((state) => state);
  const filteredProducts = products.filter((product) => product.added === true);

  const total = filteredProducts.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);

  const dispatch = useDispatch();
  return (
    <>
      <div className="drawer-block">
        <h2 className="text-white">Корзина</h2>

        <div className=" justify-center align-center">
          {filteredProducts.map((product, i) => (
            <div
              key={i}
              className="basket-item d-flex justify-center align-center "
            >
              <img src={`${product.img}`} width={80} height={80} alt=""></img>
              <div key={product.id} className="basket-item-inf">
                <p>{product.title}</p>
                <span>{product.price}</span>
              </div>
              <button
                onClick={() => dispatch(DELETE(product.id))}
                className="ml-1"
              >
                -
              </button>
            </div>
          ))}
        </div>

        <p className=" mt-10">Загальна вартість:{total} грн</p>
      </div>
    </>
  );
}

export default Drawer;
