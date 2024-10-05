import { IApiCallStep, IInputStep, IOutputStep, TConditionalBlock, TEndBlock, TTaskBlock } from "./types/global";

interface IActiveOutputStep extends IOutputStep{
    index: number,
    key: string
}

interface IActiveInputStep extends IInputStep{
    index: number,
    key: string
}

interface IActiveApiCallStep extends IApiCallStep {
    index: number,
    key: string
}

export type TActiveBlock = {
    block: TTaskBlock | TConditionalBlock | TEndBlock;
    key: string
};

export type TActiveStep = IActiveOutputStep | IActiveInputStep | IActiveApiCallStep;



