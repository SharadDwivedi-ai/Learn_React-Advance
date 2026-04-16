const ErrorMessage = ({items}) => {
  return (
    <>
      {items.length === 0 && (
        <div className="alert alert-danger">No Food-Items Available</div>
      )}
    </>
  );
};
export default ErrorMessage;
