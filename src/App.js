import DetailContainer from "./components/Details/DetailContainer";
import ShapeList from "./components/ShapesList/ShapeList";
import Workflow from "./components/Workflow/Workflow";
import "./App.scss";
function App() {
  return (
    <div className="App d-flex justify-between">
      <ShapeList />
      <Workflow />
      <DetailContainer />
    </div>
  );
}

export default App;
