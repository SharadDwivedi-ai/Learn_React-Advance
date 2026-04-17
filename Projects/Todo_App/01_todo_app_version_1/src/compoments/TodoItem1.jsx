function TodoItem1() {
  let todoName = "Go to Coaching";
  let todoDate = "09-Apr-2026";
  return (
    <div className="container">
      <div className="row sd-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger sd-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
