import { useState } from 'react'
import { shoppinglist } from './data/TEST_DATA'
import type { GroceryItem } from './types'
import ShoppingForm from './components/ShoppingForm'
import GroceryList from './components/GroceryList'
import './styles.css';

import { v4 as uuid4 } from "uuid";

function App() {

  const [items, setItems] = useState<GroceryItem[]>(shoppinglist);

  const addItem = (text: string) => {
    const newItems = [
         ...items,
         {
           id: uuid4(),
           text: text,
           isBought: false
          }
    ];
    setItems(newItems);
  };

  const buyItem = (id: string) => {
    const temporaryItems = [...items];
    const index = temporaryItems.findIndex(item => item.id === id);
    temporaryItems[index].isBought = !temporaryItems[index].isBought;
    setItems(temporaryItems);
  };

  const deleteItem = (id: string) => {
    const temporaryItems = [...items];
    const newItems = temporaryItems.filter(item => item.id !== id);
    setItems(newItems);
  };

  const editItem = (id: string, text: string) => {
    const temporaryItems = [...items];
    const index = temporaryItems.findIndex(item => item.id === id);
    temporaryItems[index].text = text;
    setItems(temporaryItems);
  }

  return (
    <>
      <h2>Shopping List App</h2>
      <h4>Add an Item to the Shopping List using the Input Form:</h4>
      <ShoppingForm addItem = {addItem} />
      <GroceryList 
              items = {items}
              buyItem = {buyItem}
              deleteItem = {deleteItem}
              editItem ={editItem}
      />
    </>
  )
}

export default App
