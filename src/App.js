import DetailContainer from "./components/Details/DetailContainer";
import ShapeList from "./components/ShapesList/ShapeList";
import Workflow from "./components/Workflow/Workflow";
import "./App.scss";
import { useState } from "react";
function App() {
  const [activeBlock, setActiveBlock] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  return (
    <div className="App main-cont d-flex justify-between">
      <ShapeList activeBlock={activeBlock} setActiveBlock={setActiveBlock} activeStep={activeStep} setActiveStep={setActiveStep} />
      <Workflow activeBlock={activeBlock} setActiveBlock={setActiveBlock} activeStep={activeStep} setActiveStep={setActiveStep} />
      <DetailContainer />
    </div>
  );
}

export default App;
