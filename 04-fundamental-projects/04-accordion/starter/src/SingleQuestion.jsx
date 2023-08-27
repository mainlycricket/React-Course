import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeQId, toggleQuestion }) => {
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {activeQId === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{activeQId === id && info}</p>
    </article>
  );
};

export default SingleQuestion;
