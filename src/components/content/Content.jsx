import { useState } from "react";
import React from "react";
import "./Content.scss";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import Drawer from "../Drawer/Drawer";

function Content() {
  const { products } = useSelector((state) => state.products);
  
  const [value, setValue] = useState("");

  const filterSneakers = products.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <div className="d-flex align-center justify-between">
        <h1>Все взуття</h1>
        <div className="search d-flex align-center mr-50">
          <img className="mr-10" src="/img/furfur.svg" />
          <input onChange={(e) => setValue(e.target.value)} />
        </div>
      </div>
      <div className="d-flex flex-wrap card-item justify-center">
        {filterSneakers.map((item, id) => {
          return <Card item={item} key={id} />;
        })}
      </div>
      <Drawer/>
    </div>
  );
}
export default Content;
