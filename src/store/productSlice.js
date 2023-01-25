import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    img: "/img/sneakers/1.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede 1",
    price: "12 999 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "1",
    img: "/img/sneakers/2.jpg",
    title: "Чоловіче взуття Nike Air Max 270",
    price: "6 299 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "2",
    img: "/img/sneakers/3.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede",
    price: "8 449 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "3",
    img: "/img/sneakers/4.jpg",
    title: "Чоловіче взуття Under Armour Curry 8",
    price: "15 199 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "4",
    img: "/img/sneakers/5.jpg",
    title: "Чоловіче взуття Nike Kyrie 7",
    price: "11 299 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "5",
    img: "/img/sneakers/6.jpg",
    title: "Чоловіче взуття Jordan Air Jordan 11",
    price: "10 799 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "6",
    img: "/img/sneakers/7.jpg",
    title: "Чоловіче взуття Nike LeBron XVIII",
    price: "16 499 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "7",
    img: "/img/sneakers/8.jpg",
    title: "Чоловіче взуття Nike Lebron XVIII Low",
    price: "13 999 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "8",
    img: "/img/sneakers/9.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede",
    price: "8 599 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "9",
    img: "/img/sneakers/10.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede 3",
    price: "8 999 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "10",
    img: "/img/sneakers/2.jpg",
    title: "Чоловіче взуття Puma X Aka Boku Future Rider",
    price: "8 999 грн",
    quantity: 0,
    added: false,
  },
  {
    id: "11",
    img: "/img/sneakers/1.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede 3",
    price: "8 999 грн",
    quantity: 0,
    added: false,
  },
];

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    ADD: (state, action) => {
      console.log("ok");
      return state.map((product) => {
        if (product.id !== action.payload.id) {
          return product;
        } else
          return {
            ...product,
            added: true,
          };
      });
    },
    DELETE: (state, action) => {
      console.log("delete");
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        } else {
          return {
            ...product,
            added: false,
          };
        }
      });
    },
  },
});
export const { ADD, DELETE } = productSlice.actions;
