import { useState } from 'react';

const Form = ({ addGrocery }) => {
  const [groceryInput, setGroceryInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addGrocery(groceryInput);
    setGroceryInput('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          name="groceryInput"
          id="groceryInput"
          className="form-input"
          value={groceryInput}
          onChange={(e) => {
            setGroceryInput(e.target.value);
          }}
          required
        />

        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
