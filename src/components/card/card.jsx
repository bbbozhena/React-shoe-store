import "./Card.scss";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD } from "../../store/productSlice";

function Card({ item }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card m-20">
        <div className="favorite">
          <img src="/img/unlike.svg" alt="unlike" />
        </div>
        <img width={133} height={112} src={item.img} alt="Sneakers" />
        <h5>{item.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Ціна:</span>
            <b>{item.price}</b>
          </div>
          <button
            className="add-to-basket"
            onClick={() => dispatch(ADD(item))}
            disabled={item.added ? true : false}
          >
            <img width={11} height={11} src="/img/btn-plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
