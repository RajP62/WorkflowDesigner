import React from 'react';
import "./Shape.scss"

export const Conditional = ({setActiveBlock}) => {
  return (
    <div>
    <div className='conditional_template' draggable onDragStart={() => setActiveBlock({type: "conditional_block"})}>
    </div>
    <p className='mt-2'>Conditional</p>
    </div>
  )
}

export const Task = ({setActiveBlock}) => {
    return (
      <div>
        <div className='task_template' draggable onDragStart={() =>setActiveBlock({type: "task_block"})}>

        </div>
        <p className='mt-2'>Task</p>
        </div>
    )
}

export const End = ({setActiveBlock}) => {
    return (
      <div>
        <div className='end_template' draggable onDragStart={() => setActiveBlock({type: "end_block"})}></div>
        <p className='mt-2'>End</p>
      </div>
    )
}

export const Output = ({setActiveStep}) => {
  return (
      <div className='output_template' draggable onDragStart={() => setActiveStep({OUTPUT: []})}>
        <p>Output</p>
      </div>
  )
}

export const Input = ({setActiveStep}) => {
  return (
    <div>
      <input className='input_template' placeholder='Input' draggable onDragStart={() => setActiveStep({INPUT: []})}></input>
    </div>
  )
}

export const ApiCall = ({setActiveStep}) => {
  return (
    <div>
      <button className='api_call_template' draggable onDragStart={() => setActiveStep({API_CALL: []})}>Api Call</button>
    </div>
  )
}