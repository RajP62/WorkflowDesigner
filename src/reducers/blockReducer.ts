import { BlockConstant } from "../constants/blockConstant";
import { TBlock } from "../types/global";

const initState = {};

const BlockReducer = (state = initState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case BlockConstant.ADD: {
      if (!Object.keys(state).length) {
        return { ...state, ...action.payload };
      } else {
        return { ...state, ...action.payload };
      }
    }

    case BlockConstant.EDIT_BLOCK: {
      const key = Object.keys(payload)[0];
      const block = payload[key];
      const replacekey = block?.replaceKey;
      const newState = { ...state };
      delete block?.replaceKey;
      delete newState[key];
      return { ...newState, [replacekey]: block };
    }

    case BlockConstant.INSERT_STEP: {
      const key = payload?.key;
      const step = payload.step;
      return {
        ...state,
        [key]: {
          ...state[key],
          steps: [...(state[key]?.steps || []), step],
        },
      };
    }

    case BlockConstant.EDIT_STEP: {
      const blockName = payload?.key;
      const index = payload?.index;
      const data = payload?.data;

      let steps = state[blockName]?.steps || [];
      steps = steps.map((el, i) => {
        if (i === index) {
          return data;
        }
        return el;
      });
      return { ...state, [blockName]: { ...state[blockName], steps } };
    }

    case BlockConstant.SHIFT_STEP: {
      debugger;
      const blockName = payload?.key;
      const index = payload?.index;
      let dropIndex = payload?.dropIndex;

      let steps = state[blockName]?.steps || [];
      if (dropIndex > steps.length - 1) {
        dropIndex = steps.length - 1;
      }
      const finalSteps = [...steps];
      const removedStep = finalSteps.splice(index, 1);
      finalSteps.splice(dropIndex, 0, removedStep[0]);

      return {
        ...state,
        [blockName]: { ...state[blockName], steps: finalSteps },
      };
    }

    case BlockConstant.DELETE_BLOCK: {
      const key = payload;
      const nextState = { ...state };
      delete nextState[key];

      return nextState;
    }

    case BlockConstant.DELETE_STEP: {
      const blockName = payload?.key;
      const index = payload?.index;

      let steps = state[blockName]?.steps || [];
      steps = steps.filter((el, i) => i !== index);

      return { ...state, [blockName]: { ...state[blockName], steps } };
    }

    default:
      return state;
  }
};

export default BlockReducer;
