import React from "react";
import DetailContainer from "./components/Details/DetailContainer";
import ShapeList from "./components/ShapesList/ShapeList";
import Workflow from "./components/Workflow/Workflow";
import "./App.scss";
import { useState } from "react";
import { TActiveBlock, TActiveStep } from "./App.types";
function App() {
  const [activeBlock, setActiveBlock] = useState<TActiveBlock | null>(null);
  const [activeStep, setActiveStep] = useState<TActiveStep | null>(null);
  console.log("Active Block", activeBlock);
  console.log("Active Step", activeStep);
  return (
    <div className="App main-cont d-flex justify-between">
      <ShapeList
        setActiveBlock={setActiveBlock}
        setActiveStep={setActiveStep}
      />
      <Workflow
        activeBlock={activeBlock}
        setActiveBlock={setActiveBlock}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <DetailContainer activeBlock={activeBlock} activeStep={activeStep} />
    </div>
  );
}

export default App;
