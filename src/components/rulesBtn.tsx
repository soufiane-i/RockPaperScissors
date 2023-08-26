import style from "./rulesBtn.module.css";
import modalStyle from "./rulesModal.module.css";

function RulesBtn() {
  function openModal() {
    document.querySelector(`.${modalStyle.container}`)?.classList.remove("off");
    console.log("ok");
  }
  return (
    <button onClick={openModal} className={style.rulesBtn}>
      R U L E S
    </button>
  );
}

export default RulesBtn;
