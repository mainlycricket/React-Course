import { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const nextSlide = () => {
    setCurrentPerson((currentPerson) => {
      let nextPerson = (currentPerson + 1) % people.length;
      return nextPerson;
    });
  };

  const prevSlide = () => {
    setCurrentPerson((currentPerson) => {
      let prevPerson = (currentPerson - 1 + people.length) % people.length;
      return prevPerson;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, name, title, image, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${(personIndex - currentPerson) * 100}%)`,
              opacity: currentPerson == personIndex ? 1 : 0,
              visibility: currentPerson == personIndex ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} className="person-img" alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>

      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
