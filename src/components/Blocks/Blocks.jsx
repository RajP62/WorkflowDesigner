import React from 'react';
import "./Blocks.scss"

export const Conditional = ({setActiveBlock}) => {
  return (
    <div className='conditional_template' draggable onDragStart={setActiveBlock({type: "conditional_block"})}>
    </div>
  )
}

export const Task = ({setActiveBlock}) => {
    return (
        <div className='task_template' draggable onDragStart={setActiveBlock({type: "task_block"})}>

        </div>
    )
}

export const End = ({setActiveBlock}) => {
    return (
        <div className='end_template' draggable onDragStart={setActiveBlock({type: "end_block"})}></div>
    )
}