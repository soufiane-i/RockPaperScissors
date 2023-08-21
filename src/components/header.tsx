import style from "./header.module.css";

function Header() {
  let score: number = 12;
  return (
    <header className={style.header}>
      <h1 className={style.title}>
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
        <br />
      </h1>

      <div className={style.scoring}>
        <p className={style.scoreTitle}>SCORE</p>
        <p className={style.score}>{score}</p>
      </div>
    </header>
  );
}

export default Header;
