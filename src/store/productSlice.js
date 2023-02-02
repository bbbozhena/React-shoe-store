import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    img: "/img/sneakers/1.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede 1",
    price: 12999,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "1",
    img: "/img/sneakers/2.jpg",
    title: "Чоловіче взуття Nike Air Max 270",
    price: 6299,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "2",
    img: "/img/sneakers/3.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede",
    price: 8449,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "3",
    img: "/img/sneakers/4.jpg",
    title: "Чоловіче взуття Under Armour Curry 8",
    price: 15199,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "4",
    img: "/img/sneakers/5.jpg",
    title: "Чоловіче взуття Nike Kyrie 7",
    price: 11299,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "5",
    img: "/img/sneakers/6.jpg",
    title: "Чоловіче взуття Jordan Air Jordan 11",
    price: 10799,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "6",
    img: "/img/sneakers/7.jpg",
    title: "Чоловіче взуття Nike LeBron XVIII",
    price: 16499,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "7",
    img: "/img/sneakers/8.jpg",
    title: "Чоловіче взуття Nike Lebron XVIII Low",
    price: 13999,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "8",
    img: "/img/sneakers/9.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede",
    price: 8599,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "9",
    img: "/img/sneakers/10.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede 3",
    price: 8999,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "10",
    img: "/img/sneakers/2.jpg",
    title: "Чоловіче взуття Puma X Aka Boku Future Rider",
    price: 8999,
    quantity: 0,
    added: false,
    fav: false,
  },
  {
    id: "11",
    img: "/img/sneakers/1.jpg",
    title: "Чоловіче взуття Nike Blazer Mid Suede 3",
    price: 8999,
    quantity: 0,
    added: false,
    fav: false,
  },
];

export const filteredProducts = (products) => {
  return products.filter((product) => product.added === true);
};

export const filteredFavourites = (products) => {
  return products.filter((product) => product.fav === true);
};

export const total = (products) => {
  const filterProducts = filteredProducts(products);
  return filterProducts.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    ADD: (state, action) => {
      console.log("ok");
      return state.map((product) => {
        if (product.id !== action.payload.id) {
          return product;
        }
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
        }
        return {
          ...product,
          added: false,
        };
      });
    },
    ADDFAVOURITE: (state, action) => {
      console.log("ok");
      return state.map((product) => {
        if (product.id !== action.payload.id) {
          return product;
        }
        return {
          ...product,
          fav: true,
        };
      });
    },
    DELETEFAVOURITE: (state, action) => {
      console.log("delete");
      return state.map((product) => {
        if (product.id !== action.payload) {
          return product;
        }
        return {
          ...product,
          fav: false,
        };
      });
    },
  },
});
export const { ADD, DELETE, DELETEFAVOURITE, ADDFAVOURITE } =
  productSlice.actions;
