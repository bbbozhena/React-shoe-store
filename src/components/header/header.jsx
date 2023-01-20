import "./Header.scss";
import Drawer from "../Drawer/Drawer";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
            {" "}
            <Link to="/drawer">
              <img width={18} height={18} src="/img/cart.svg" alt="Cart" />{" "}
            </Link>
            <span>1200грн</span>{" "}
          </li>
          <li>
            {" "}
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
