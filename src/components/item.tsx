import style from "./item.module.css";
import { ItemProps } from "../interfaces";

function Item(props: ItemProps) {
  let color: string = "red";

  if (props.type === "paper") {
    color = "blue";
  } else if (props.type === "scissors") {
    color = "yellow";
  }

  return (
    <div className={`${style.item} ${color}`}>
      <div className={style.itemImg}>
        <img src={`/images/icon-${props.type}.svg`} alt="" />
      </div>
    </div>
  );
}

export default Item;
