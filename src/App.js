import './App.css';
import Timer from "./components/Timer";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Timer />
			<Modal message={{title: "Modal Test", description: "Test description here"}} />
    </div>
  );
}

export default App;
