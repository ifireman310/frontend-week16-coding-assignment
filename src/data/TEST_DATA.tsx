import { v4 as uuid4 } from "uuid";

export const shoppinglist = [
  {
    id: uuid4(),
    text: "bananas",
    isBought: false
  },
  {
    id: uuid4(),
    text: "pasta",
    isBought: true
  },
  {
    id: uuid4(),
    text: "pasta sauce",
    isBought: false
  },
  {
    id: uuid4(),
    text: "dijon mustard",
    isBought: false
  },
  {
    id: uuid4(),
    text: "green onions",
    isBought: false
  },
  {
    id: uuid4(),
    text: "spinach",
    isBought: false
  }
];