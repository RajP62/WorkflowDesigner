import React from 'react';
import "./Workflow.scss";
import { useDispatch, useSelector } from 'react-redux';
import { BlockConstant } from '../../constants/blockConstant';
import { ConditionalBlock, EndBlock, TaskBlock } from '../Block/Blocks';

const Workflow = ({activeBlock, activeStep, setActiveBlock, setActiveStep}) => {
  const dispatch = useDispatch();

  const blocks = useSelector(state=> state.blocks) || {};
  
  const onDragOver = (e) => { e.preventDefault(); };
  
  const onDrop = (e) => {
    e.preventDefault();
    const blockName = Object.keys(blocks).length ? `Block-${Object.keys(blocks).length+1}` : 'start';
    const payload = {[blockName]: activeBlock};
    dispatch({type: BlockConstant.ADD, payload});
    setActiveBlock(null);
  }
  const blocksList = [];
  for (let key in blocks) {
    blocksList.push({key, block:blocks[key]});
  }

  return (
    <div className='workflow-container text-center' onDragOver={activeBlock? onDragOver : null} onDrop={activeBlock? onDrop : null}>
      {
        blocksList?.map(el=> {
          return el?.block.type==='conditional_block' ? <ConditionalBlock block={el} setActiveBlock={setActiveBlock} setActiveStep={setActiveStep}/>
          :el?.block.type === 'task_block'? <TaskBlock block={el} activeStep={activeStep} setActiveBlock={setActiveBlock} setActiveStep={setActiveStep}/>
          :el?.block.type === 'end_block'? <EndBlock block={el} setActiveBlock={setActiveBlock} setActiveStep={setActiveStep}/>
          : null
        }
      )
      }
    </div>
  )
}

export default Workflow
