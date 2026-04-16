import styles from "./Item.module.css";
const Item = ({ foodItems, bought, handleBuyButton }) => {
  // console.log(event);
  // console.log(`Buy = ${foodItems}`);


  return (
    <li className={`${styles['sdItem']} list-group-item ${bought && 'active'}`}>
      <span className={`${styles['sdSpan']}`}>{foodItems}</span>
      <button className={`${styles.button} btn btn-warning`}
        onClick={handleBuyButton}>
        Buy Now
      </button>
    </li>
  )
};
export default Item;
