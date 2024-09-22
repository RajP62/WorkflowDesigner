import React from 'react';
import "./DetailContainer.scss";
import { EditTaskBlock } from '../EditBlock/EditTaskBlock';
import { EditConditionalBlock } from '../EditBlock/EditConditionalBlock';
import { EditEndBlock } from '../EditBlock/EditEndBlock';
import { EditOutput } from '../EditStep/EditOutput';
import { EditInput } from '../EditStep/EditInput';
import { EditApiButton } from '../EditStep/EditApiTrigger';

const DetailContainer = ({activeBlock, activeStep}) => {
  return (
    <div className='detail-container border m-1'>
      {
        activeBlock && activeBlock?.block?.type === 'task_block' && <EditTaskBlock currentBlock={activeBlock} />
      }
      {
        activeBlock && activeBlock?.block?.type === 'conditional_block' && <EditConditionalBlock currentBlock={activeBlock}/>
      }
      {
        activeBlock && activeBlock?.block?.type === 'end_block' && <EditEndBlock currentBlock={activeBlock}/>
      }

      {
        activeStep && activeStep.OUTPUT && <EditOutput activeStep={activeStep}/>
      }

      {
        activeStep && activeStep.INPUT && <EditInput activeStep={activeStep}/>
      }

      {
        activeStep && activeStep.API_CALL && <EditApiButton activeStep={activeStep}/>
      }
      
    </div>
  )
}

export default DetailContainer
