import SingleItem from './SingleItem';

const Items = ({ groceries, removeGrocery, markCompleted }) => {
  return (
    <div className='items'>
      {groceries.map((grocery) => {
        return (
          <SingleItem
            grocery={grocery}
            key={grocery.id}
            removeGrocery={removeGrocery}
            markCompleted={markCompleted}
          />
        );
      })}
    </div>
  );
};
export default Items;
