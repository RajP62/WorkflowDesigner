import React, { useState } from 'react'
import { BlockConstant } from '../../constants/blockConstant';
import { useDispatch } from 'react-redux';

export const EditTaskBlock = ({currentBlock}) => {
  const [blockName, setBlockName] = useState(currentBlock?.key);
    const [editState, setEditState] = useState(currentBlock?.block);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {name, value} = e?.target;
        setEditState(state=> ({...state, [name]: value}));
    }

    const handleDelete = () => {
      const key = currentBlock?.key;
      dispatch({type: BlockConstant.DELETE_BLOCK, payload: key});
    }

    const onSaveBlock = ()=> {
      const key = currentBlock?.key;
      const payload = {[key]: {...editState, replaceKey: blockName}};
      dispatch({type: BlockConstant.EDIT_BLOCK, payload});
  }
  return (
    <div>
      <div className='edit-block-container'>
      <h3>Edit Block</h3>
      <div className='edit-block-form'>
          <label>BlockName</label>
          <input type='text' value={blockName} onChange={(e) => setBlockName(e?.target?.value)}/>
        </div>
        <div className='edit-block-form'>
          <label>Task</label>
          <input type='text' value={editState?.task} name='task' onChange={handleChange} placeholder='Enter task' />
        </div>
        <div>
            <button className='delete-block' onClick={handleDelete}>Delete</button>
            <button className='save-block-changes' onClick={onSaveBlock}>Save</button>
        </div>
      </div>
    </div>
  )
}
