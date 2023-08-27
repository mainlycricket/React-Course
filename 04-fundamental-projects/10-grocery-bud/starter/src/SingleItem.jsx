const SingleItem = ({ grocery, removeGrocery, markCompleted }) => {
  const { name, completed, id } = grocery;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        defaultChecked={completed}
        value={completed}
        onChange={() => {
          markCompleted(id);
        }}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        onClick={() => {
          removeGrocery(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default SingleItem;
