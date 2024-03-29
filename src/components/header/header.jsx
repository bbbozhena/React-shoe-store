import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Drawer from "../Drawer/Drawer";
import { useState } from "react";
import Content from "../Content/Content";
import { getTotalSum } from "../../store/productSlice";
import Favourite from "../Favourite/Favourite";

function Header() {
  const { products } = useSelector((state) => state);

  const [show, setShow] = useState(false);
  const [showFavourite, setShowFavourite] = useState(false);

  const openDrawer = () => {
    setShow(!show);
  };
  const openFavourite = () => {
    setShowFavourite(!showFavourite);
  };

  return (
    <div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex alight-center">
          <Link to="/">
            <img width={40} height={40} src="/img/logo.png" alt="Logo" />
          </Link>
          <div>
            <h3 className="text-uppercase">Real Sneakers</h3>
            <p>Магазин найкращого взуття</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <button className="mr-10 p-4  " onClick={openDrawer}>
              <img width={18} height={18} src="/img/cart.svg" alt="Cart" />{" "}
            </button>
            {show ? <Drawer /> : null}
            <span>{getTotalSum(products)}грн </span>
          </li>
          <li>
            <button className="mr-10 p-4" onClick={openFavourite}>
              <img width={18} height={35} src="/img/user.svg" alt="User" />
            </button>
            {showFavourite ? <Favourite /> : null}
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
