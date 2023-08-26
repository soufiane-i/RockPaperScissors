import style from "./game.module.css";
import Item from "./item";
import RulesBtn from "./rulesBtn";

function Game() {
  return (
    <div className={style.container}>
      <div className={style.game}>
        <div className={style.triangleContainer}>
          <img
            className={style.triangle}
            src="/images/bg-triangle.svg"
            alt=""
          />
        </div>
        <div className={style.line1}>
          <Item type="rock" />
          <Item type="paper" />
        </div>
        <div className={style.line2}>
          <Item type="scissors" />
        </div>
      </div>
      <div className={style.rulesBtnContainer}>
        <RulesBtn />
      </div>
    </div>
  );
}

export default Game;
