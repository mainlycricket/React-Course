import CategoryOption from "./CategoryOption";

const Categories = ({ categories, changeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <CategoryOption
          key={index}
          category={category}
          changeCategory={changeCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
