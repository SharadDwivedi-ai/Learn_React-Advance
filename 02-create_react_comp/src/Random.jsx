function Random() {
  const randomNumber = Math.random() * 100;
  return (
    <div>
      <h2>Random Number: {Math.floor(randomNumber)}</h2>
    </div>
  );
}
export default Random;
