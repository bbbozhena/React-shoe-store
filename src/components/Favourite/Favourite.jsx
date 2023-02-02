import "./Favourite.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filteredFavourites, DELETEFAVOURITE, ADD } from "../../store/productSlice";

function Favourite() {
  const { products } = useSelector((state) => state);

  const dispatch = useDispatch();
  return (
    <>
      <div className="favourite-block">
        <h2 className="text-white">Улюблене</h2>

        <div className=" justify-center align-center">
          {filteredFavourites(products).map((product, i) => (
            <div
              key={i}
              className="favourite-item d-flex justify-center align-center "
            >
              <button onClick={() => dispatch(ADD(product.id))}>+</button>
              <img src={`${product.img}`} width={80} height={80} alt=""></img>
              <div key={product.id} className="basket-item-inf">
                <p>{product.title}</p>
                <span>{product.price}</span>
              </div>
              <button
                onClick={() => dispatch(DELETEFAVOURITE(product.id))}
                className="ml-1"
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Favourite;
