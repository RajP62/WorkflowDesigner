
import { ApiCall, Input, Output } from "../Shapes/Shape.jsx";
import "./StepList.scss";

import React from 'react'

export const StepList = ({setActiveStep}) => {
  return (
    <div className='steps-main-cont m-1 text-center'>
        <h3 className='m-2'>Steps</h3>
        <Output setActiveStep={setActiveStep}/>
        <Input setActiveStep={setActiveStep}/>
        <ApiCall setActiveStep={setActiveStep}/>
      </div>
  )
}
