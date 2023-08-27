import { useState } from "react";
import Categories from "./Categories";
import menu from "./data";
import Menus from "./Menus";

const App = () => {
  const categories = ["all"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  for (let item of menu) {
    const category = item.category;
    if (!categories.includes(category)) categories.push(category);
  }

  const filteredMenus = menu.filter(
    (item) => item.category === selectedCategory || selectedCategory == "all"
  );

  function changeCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="title-underline"></div>
        </div>

        <Categories changeCategory={changeCategory} categories={categories} />

        <Menus menus={filteredMenus} />
      </section>
    </main>
  );
};
export default App;
