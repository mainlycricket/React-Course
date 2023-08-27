const CategoryOption = ({ category, changeCategory }) => {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => changeCategory(category)}
    >
      {category}
    </button>
  );
};

export default CategoryOption;
