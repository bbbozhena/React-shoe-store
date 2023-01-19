import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        img: "/img/sneakers/1.jpg",
        title: "Чоловіче взуття Nike Blazer Mid Suede 1",
        price: "12 999 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/2.jpg",
        title: "Чоловіче взуття Nike Air Max 270",
        price: "6 299 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/3.jpg",
        title: "Чоловіче взуття Nike Blazer Mid Suede",
        price: "8 449 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/4.jpg",
        title: "Чоловіче взуття Under Armour Curry 8",
        price: "15 199 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/5.jpg",
        title: "Чоловіче взуття Nike Kyrie 7",
        price: "11 299 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/6.jpg",
        title: "Чоловіче взуття Jordan Air Jordan 11",
        price: "10 799 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/7.jpg",
        title: "Чоловіче взуття Nike LeBron XVIII",
        price: "16 499 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/8.jpg",
        title: "Чоловіче взуття Nike Lebron XVIII Low",
        price: "13 999 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/9.jpg",
        title: "Чоловіче взуття Nike Blazer Mid Suede",
        price: "8 599 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/10.jpg",
        title: "Чоловіче взуття Nike Blazer Mid Suede 3",
        price: "8 999 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/2.jpg",
        title: "Чоловіче взуття Puma X Aka Boku Future Rider",
        price: "8 999 грн:",
        quantity: 0,
        added: false,
      },
      {
        img: "/img/sneakers/1.jpg",
        title: "Чоловіче взуття Nike Blazer Mid Suede 3",
        price: "8 999 грн:",
        quantity: 0,
        added: false,
      },
    ],
  },
  reducers: {},
});
export {productSlice}
export default productSlice.reducer;
