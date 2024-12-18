import styles from './Item.module.css'
const Item =(fruitItem) =>{
    return (
        <li className={`${styles["kg-item"]}`}>
            <span className={styles["kg-span"]}>{fruitItem}</span>
        </li>
    );
}
export default Item;