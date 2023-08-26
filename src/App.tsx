import Game from "./components/game";
import Header from "./components/header";
import RulesModal from "./components/rulesModal";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <RulesModal />
    </div>
  );
}

export default App;
