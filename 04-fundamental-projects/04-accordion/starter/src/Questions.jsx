import questions from "./data";
import SingleQuestion from "./SingleQuestion";
import { useState } from "react";

const Questions = () => {
  const [activeQId, setActiveQId] = useState(null);

  function toggleQuestion(id) {
    if (id === activeQId) setActiveQId(null);
    else setActiveQId(id);
  }

  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeQId={activeQId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
