import MenuDish from "./MenuDish";

const Menus = ({ menus }) => {
  return (
    <div className="section-center">
      {menus.map((menu) => (
        <MenuDish key={menu.id} {...menu} />
      ))}
    </div>
  );
};

export default Menus;
