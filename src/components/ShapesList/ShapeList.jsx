import React from 'react';
import "./ShapeList.scss";
import BlockList from '../BlockList/BlockList';
import { StepList } from '../StepsList/StepList';

const ShapeList = ({setActiveBlock, setActiveStep}) => {
  return (
    <div className='shape-list-container m-1 text-center'>
      <h2>Drag items from here</h2>
      <div className='blocks-main-cont m-1 text-center'>
        <h3 className='mb-2'>Blocks</h3>
          <BlockList setActiveBlock={setActiveBlock}/>
          <StepList setActiveStep={setActiveStep}/>
      </div>
    </div>
  )
}

export default ShapeList;