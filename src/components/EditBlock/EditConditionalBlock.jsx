import { useDispatch } from "react-redux";
import React, { useState } from 'react'
import { BlockConstant } from "../../constants/blockConstant";
import "./EditBlock.scss";

export const EditConditionalBlock = ({currentBlock}) => {
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
    const payload = {[key]: {...editState, replaceKey: {...blockName}}};
    dispatch({type: BlockConstant.EDIT_BLOCK, payload});
}
  return (
    
    <div className="edit-container-main">
      <div className='edit-block-container'>
        <h3>Edit Block</h3>
      <div className='edit-block-form'>
          <label>Block</label>
          <input type='text' value={blockName} onChange={(e) => setBlockName(e?.target?.value)}/>
        </div>
        <div className='edit-block-form'>
          <label>Condition</label>
          <input type='text' value={editState?.if || ""} onChange={handleChange} name="if" placeholder='Enter condition' />
        </div>
        <div className='edit-block-form'>
          <label>Then</label>
          <input type='text' value={editState?.then || ""} onChange={handleChange} name="then" placeholder='Enter block name' />
        </div>
        <div className='edit-block-form'>
          <label>Else</label>
          <input type='text' value={editState?.else || ""} onChange={handleChange} name="else" placeholder='Enter block name' />
        </div>
        <div>
            <button className='delete-block' onClick={handleDelete}>Delete</button>
            <button className='save-block-changes' onClick={onSaveBlock}>Save</button>
        </div>
      </div>  
    </div>
  )
}

