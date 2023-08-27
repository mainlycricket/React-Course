import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setText(data.slice(0, parseInt(count)));
  }

  return (
    <section className="section-center">
      <h4>tired of boring lorem epsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label forhtml="count">Paragraphs:</label>
        <input
          type="number"
          min="1"
          max="8"
          id="count"
          name="count"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
          required
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((para) => {
          return <p key={nanoid()}>{para}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
