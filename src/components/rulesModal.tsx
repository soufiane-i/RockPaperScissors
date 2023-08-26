import style from "./rulesModal.module.css";

function RulesModal() {
  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.parentElement?.parentElement?.parentElement?.classList.add(
      "off"
    );
  };
  return (
    <div className={style.container}>
      <div className={style.rulesModal}>
        <div className={style.header}>
          <h2>RULES</h2>
          <img src="/images/icon-close.svg" alt="" onClick={closeModal} />
        </div>
        <div className={style.rules}>
          <img src="/images/image-rules.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RulesModal;
