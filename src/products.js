const products = [
  {
    productId: "e-1234",
    name: "BasketBall",
    price: 2,
    isStock: true,
    inCheck: false,
  },
  {
    productId: "e-2345",
    name: "Socks",
    price: 1,
    isStock: true,
    inCheck: false,
  },
  {
    productId: "e-3456",
    name: "Product#3",
    price: 5,
    isStock: false,
    inCheck: false,
  },
  {
    productId: "e-4567",
    name: "Product#4",
    price: 4.5,
    isStock: true,
    inCheck: false,
  },
];

export function getProduct(id) {
  let match = products.filter((item) => {
    return item.productId === id;
  });
  return match;
}

export default products;
