import React from 'react';
import { Conditional, End, Task } from '../Shapes/Shape';

const BlockList = ({setActiveBlock}) => {
  return (
    <div className='blocklist-container d-flex justify-between'>
        <Conditional setActiveBlock={setActiveBlock}/>
        <Task setActiveBlock={setActiveBlock}/>
        <End setActiveBlock={setActiveBlock}/>
    </div>
  )
}

export default BlockList
