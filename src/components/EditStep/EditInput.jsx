import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { BlockConstant } from '../../constants/blockConstant';

export const EditInput = ({activeStep}) => {
    const dispatch = useDispatch();
    const [editState, setEditState] = useState({INPUT: [...activeStep?.INPUT || []]});
    const handleChange = (e) => {
        const {value} = e?.target;
        setEditState(state=> {
            const input = state?.INPUT || [];
          input[0] = value;
          return {...state, INPUT: input};
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
          <label>Name</label>
          <input type='text' value={editState?.INPUT? editState.INPUT[0] : ""} name='name' onChange={handleChange} placeholder='Enter Name' />
        </div>
        <div>
            <button className='delete-step' onClick={handleDelete}>Delete</button>
            <button className='save-step-changes' onClick={onSaveStep}>Save</button>
        </div>
      </div>
    </div>
  )
}
