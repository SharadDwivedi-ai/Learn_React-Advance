function Hello() {
  let myName = "React";
  let fullName = () => {
    return "React JS";
  };
  return (
    <h2>
      Hello {myName} ! It is future of web development. Future language{" "}
      {fullName()}
    </h2>
  );
}
export default Hello;
