import "./Drawer.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE } from "../../store/productSlice";
import { useState } from "react";
import { useEffect } from "react";
import {
  filteredProducts,
  getTotalSum,
  INCREMENTQUANTITY,
} from "../../store/productSlice";

function Drawer() {
  const { products } = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <>
      <div className="drawer-block">
        <h2 className="text-white">Корзина</h2>

        <div className=" justify-center align-center">
          {filteredProducts(products).map((product, i) => (
            <div
              key={i}
              className="basket-item d-flex justify-center align-center "
            >
              <button onClick={() => dispatch(INCREMENTQUANTITY(product.id))}>
                +
              </button>
              <p>{product.quantity}</p>
              <img src={`${product.img}`} width={80} height={80} alt=""></img>
              <div key={product.id} className="basket-item-inf">
                <p>{product.title} </p>
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

        <p className=" mt-10">
          Загальна вартість:
          {getTotalSum(products)}грн
        </p>
      </div>
    </>
  );
}

export default Drawer;
