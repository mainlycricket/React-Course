import { useState } from 'react';

const Form = ({ toggleColor }) => {
  const [color, setColor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    toggleColor(color);
  }

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          required
        />

        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="#f15025"
          required
        />

        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;
