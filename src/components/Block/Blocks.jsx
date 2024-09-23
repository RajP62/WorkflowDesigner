import React from 'react';
import "./Block.scss";
import { useDispatch } from 'react-redux';
import { BlockConstant } from '../../constants/blockConstant';
import { ApiCall, Input, Output } from '../Steps/Steps';

export const ConditionalBlock = ({setActiveBlock, block}) => {
    const currBlock = block?.block;
  return (
    <div className='conditional_block_template'  onDragStart={() => setActiveBlock({type: "conditional_block"})} onClick={(e) => {e?.stopPropagation(); setActiveBlock(block)}}>
        <div className='conditional-container'>
        {
            currBlock?.if && <p>{currBlock.if}</p>
        }
        </div>
    </div>
  ) 
}

export const TaskBlock = ({setActiveBlock, activeStep, setActiveStep, block}) => {
    const dispatch = useDispatch();
    const currBlock = block?.block;
    const steps = currBlock?.steps || [];

    const onDrop = (e, block) => {
        e.stopPropagation();
        const key = block?.key;
        const payload = {key, step: activeStep};
        dispatch({type: BlockConstant.INSERT_STEP, payload});
        setActiveStep(null);
      }
    const onDragOver = (e) => { e.preventDefault(); };
    return (
        <div className='task_block_template' onDragOver={onDragOver} onDrop={activeStep? (e)=>onDrop(e, block) : null} onDragStart={() =>setActiveBlock({type: "task_block"})} onClick={(e) => {e?.stopPropagation(); setActiveBlock(block)}}>
            {/* <DropArea activeStep={activeStep} setActiveStep={setActiveStep} dropIndex={0}/> */}
            {
                steps.map((el, index)=> {
                    return (<>
                    <div className='steps-container'>
                        {
                            el?.OUTPUT ? <Output dropIndex={index} activeStep={activeStep} step={el} index={index} block={block} setActiveStep={setActiveStep}/>
                            : el?.INPUT ? <Input dropIndex={index} activeStep={activeStep} step={el} index={index} block={block} setActiveStep={setActiveStep}/>
                            : el?.API_CALL? <ApiCall dropIndex={index} activeStep={activeStep} step={el} index={index} block={block} setActiveStep={setActiveStep}/>
                            : null
                        }
                    </div>
                    {/* <DropArea activeStep={activeStep} setActiveStep={setActiveStep} dropIndex={index+1}/> */}
                    </>)
                })
            }
        </div>
    )
}

export const EndBlock = ({setActiveBlock, block}) => {
    const currBlock = block?.block;
    return (
        <div className='end_block_template' onDragStart={() => setActiveBlock({type: "end_block"})} onClick={(e) => {e?.stopPropagation(); setActiveBlock(block)}}>
            {
                currBlock?.message && <p>{currBlock?.message}</p>
            }
        </div>
    )
}