import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { BlockConstant } from '../../constants/blockConstant';

export const EditOutput = ({activeStep}) => {
  const dispatch = useDispatch();
    const [editState, setEditState] = useState({  OUTPUT: activeStep?.OUTPUT || []});
    const handleChange = (e) => {
        const {value} = e?.target;
        setEditState(state=> {
          const output = state?.OUTPUT;
          output[0] = value;
          return {...state, OUTPUT: output};
        });
    }

    const handleDelete = () => {
      const payload = {...activeStep};
      dispatch({type: BlockConstant.DELETE_STEP, payload});
  }

    const onSaveStep = ()=> {
      const payload = {...activeStep, data: editState};
      dispatch({type: BlockConstant.EDIT_STEP, payload});
    }
  return (
    <div>
      <h3>Edit Step</h3>
      <div className='edit-step-container'>
        <div className='edit-step-form'>
          <label>Message</label>
          <input type='text' value={editState?.OUTPUT? editState.OUTPUT[0] : ""} name='message' onChange={handleChange} placeholder='Enter task' />
        </div>
        <div>
            <button className='delete-step' onClick={handleDelete}>Delete</button>
            <button className='save-step-changes' onClick={onSaveStep}>Save</button>
        </div>
      </div>
    </div>
  )
}
