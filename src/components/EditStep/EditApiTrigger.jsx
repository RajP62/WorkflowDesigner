import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { BlockConstant } from '../../constants/blockConstant';

export const EditApiButton = ({activeStep}) => {
    const [editState, setEditState] = useState({API_CALL: [activeStep?.API_CALL || []]});
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {name, value} = e?.target;
        setEditState(state=> {
        const API_CALL = state?.API_CALL || [];
        if(name === 'url') {
            API_CALL[0] = value;
        } else if(name === 'method') {  
            API_CALL[1] = value;
        } else if(name === 'header') {
            API_CALL[2] = value;
        } else if(name === 'body') {
            API_CALL[3] = value;
        }
        return {...state, API_CALL};    
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
          <label>Url</label>
          <input type='text' value={editState?.API_CALL? editState?.API_CALL[0] : ""} name='url' onChange={handleChange} placeholder='Enter the url' />
        </div>
        <div className='edit-step-form'>                
          <label>Method</label>
          <input type='text' value={editState?.API_CALL? editState?.API_CALL[1] : ""} name='method' onChange={handleChange} placeholder='Enter the request method' />
        </div>
        <div className='edit-step-form'>
          <label>Header</label>
          <input type='text' value={editState?.API_CALL? editState?.API_CALL[2] : ""} name='header' onChange={handleChange} placeholder='Enter the header' />
        </div>
        <div className='edit-step-form'>
          <label>Body</label>
          <input type='text' value={editState?.API_CALL? editState?.API_CALL[3] : ""} name='body' onChange={handleChange} placeholder='Enter the header' />
        </div>
        <div>
            <button className='delete-step' onClick={handleDelete}>Delete</button>
            <button className='save-step-changes' onClick={onSaveStep}>Save</button>
        </div>
      </div>
    </div>
  )
}
