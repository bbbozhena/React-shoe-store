import "./Drawer.scss";
import React from "react";
import { useSelector } from "react-redux";

function Drawer() {
  return (
    <>
      <div className="drawer-block">
        <h2>Корзина</h2>
        <div className="basket-item">
          <img src="" alt=""></img>
          <div className="basket-item-inf">
            <p></p>
            <span></span>
          </div>
          <button></button>
        </div>
      </div>
    </>
  );
}

export default Drawer;
