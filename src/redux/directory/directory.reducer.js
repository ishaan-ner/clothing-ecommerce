const INITIAL_STATE = [
  {
    name: "hats",
    img: "/images/hats.jpg",
    id: "1",
    linkURL: "shop/hats",
  },
  {
    name: "jackets",
    img: "/images/jackets.jpg",
    id: "2",
    linkURL: "shop/jackets",
  },
  {
    name: "sneakers",
    img: "/images/sneakers.jpg",
    id: "3",
    linkURL: "shop/sneakers",
  },
  {
    name: "womens",
    img: "/images/womens.jpg",
    id: "5",
    size: "large",
    linkURL: "shop/womens",
  },
  {
    name: "mens",
    img: "/images/mens.jpg",
    id: "4",
    size: "large",
    linkURL: "shop/mens",
  },
];

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
