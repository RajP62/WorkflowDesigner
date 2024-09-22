import React, { useState } from 'react';
import "./StepDropArea.scss";
import { useDispatch } from 'react-redux';
import { BlockConstant } from '../../constants/blockConstant';

export const DropArea = ({dropIndex, activeStep, setActiveStep}) => {
  const dispatch = useDispatch();
  const [showDrop, setShowDrop] = useState(false);

  const onDrop = (e) => {
    e?.stopPropagation();
    const payload = {...activeStep, dropIndex};
    dispatch({type: BlockConstant.SHIFT_STEP, payload});
    setActiveStep(null);
  }

  const onDragLeave = (e) => {
    e?.stopPropagation();
    setShowDrop(false);
  }
  return (
    <section className={`${activeStep? 'display': 'hide_drop'} ${showDrop? 'drop_area': 'hide_drop'}`} onDragEnter={() => setShowDrop(true)} onDrop={onDrop} onDragLeave={onDragLeave}>Drop Here</section>
  )
}
