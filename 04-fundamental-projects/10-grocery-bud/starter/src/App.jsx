import { useState } from 'react';
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';

import Form from './Form';
import Items from './Items';

const App = () => {
  let groceryList = JSON.parse(localStorage.getItem('groceryList')) || [];

  const [groceries, setGroceries] = useState(groceryList);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addGrocery={addGrocery} />
      <Items
        groceries={groceries}
        removeGrocery={removeGrocery}
        markCompleted={markCompleted}
      />
    </section>
  );

  function addGrocery(groceryName) {
    groceryList.push({ name: groceryName, id: nanoid(), completed: false });
    updateGroceryList(groceryList);
    toast.success('Item added to the list');
  }

  function removeGrocery(id) {
    const updatedGroceryList = groceryList.filter(
      (grocery) => grocery.id != id
    );
    updateGroceryList(updatedGroceryList);
    toast.success('Item deleted!');
  }

  function markCompleted(id) {
    const groceryItem = groceryList.find((grocery) => grocery.id == id);
    groceryItem['completed'] = !groceryItem['completed'];
    updateGroceryList(groceryList);
  }

  function updateGroceryList(groceryList) {
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
    setGroceries([...groceryList]);
  }
};

export default App;
