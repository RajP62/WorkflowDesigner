import { useDispatch } from "react-redux";
import "./Steps.scss";

import React from 'react'
import { BlockConstant } from "../../constants/blockConstant";

export const Output = ({setActiveStep, activeStep, step, index, dropIndex, block}) => {
  const dispatch = useDispatch();
  step = {...step, key: block?.key, index};

  const onDragEnter = (e) => {
    e?.stopPropagation();
    e.target.classList.add('dashed-border'); // Add dashed border on drag enter
  };

  const onDragLeave = (e) => {
    e?.stopPropagation();
    e.target.classList.remove('dashed-border'); // Remove dashed border on drag leave
  };

  const onDrop = (e) => {
    e?.stopPropagation();
    const payload = {...activeStep, dropIndex};
    dispatch({type: BlockConstant.SHIFT_STEP, payload});
    setActiveStep(null);
  }

  return (
    <p className="step_output" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop} draggable onClick={(e) => {e?.stopPropagation(); setActiveStep(step)}} onDragStart={() => setActiveStep(step)}>{step.OUTPUT[0] || "Insert message"}</p>
  )
}

export const Input = ({step, activeStep, setActiveStep, index, dropIndex, block}) => {
  const dispatch = useDispatch();
  step = {...step, key: block?.key, index};

  const onDragEnter = (e) => {
    e?.stopPropagation();
    e.target.classList.add('dashed-border'); // Add dashed border on drag enter
  };

  const onDragLeave = (e) => {
    e?.stopPropagation();
    e.target.classList.remove('dashed-border'); // Remove dashed border on drag leave
  };

  const onDrop = (e) => {
    e?.stopPropagation();
    const payload = {...activeStep, dropIndex};
    dispatch({type: BlockConstant.SHIFT_STEP, payload});
    setActiveStep(null);
  }

  return (
    <input className='step_input draggable-input display-block' onDragLeave={onDragLeave} onDragEnter={onDragEnter} draggable onDrop={onDrop} onClick={(e) => {e?.stopPropagation(); setActiveStep(step)}} onDragStart={() => setActiveStep(step)} name={step?.INPUT[0]} type="text" placeholder={step?.INPUT[0]? `Please Enter ${step.INPUT[0]}` : ""}/>
  )
}

export const ApiCall = ({step, activeStep, setActiveStep, index, dropIndex, block}) => {
  const dispatch = useDispatch();
  step = {...step, key: block?.key, index};

  const onDragEnter = (e) => {
    e?.stopPropagation();
    e.target.classList.add('dashed-border'); // Add dashed border on drag enter
  };

  const onDragLeave = (e) => {
    e?.stopPropagation();
    e.target.classList.remove('dashed-border'); // Remove dashed border on drag leave
  };

  const onDrop = (e) => {
    e?.stopPropagation();
    const payload = {...activeStep, dropIndex};
    dispatch({type: BlockConstant.SHIFT_STEP, payload});
    setActiveStep(null);
  }

  return (
    <button className='step_apicall display-block' onDragEnter={onDragEnter} onDragLeave={onDragLeave} draggable onDrop={onDrop} onClick={(e) => {e?.stopPropagation(); setActiveStep(step)}} onDragStart={() => setActiveStep(step)}>{step?.API_CALL[2]?.name || "Call Api"}</button>
  )
}