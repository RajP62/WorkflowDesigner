import { StringMappingType } from "typescript";

export type TTaskBlock = {
    type: string,
    steps?: TStep[],
    next?: string
}

export type TConditionalBlock = {
    type: string,
    if?: string,
    then?: string,
    else?: string
}

export type TEndBlock = {
    type: string,
    message?: string
}

export type TBlock = TTaskBlock | TConditionalBlock | TEndBlock;


interface IOutputStep{
    OUTPUT: string[],
}

interface IInputStep{
    INPUT: string[],
}

interface IApiCallStep {
    API_CALL: [string?, string?, object?, {'Accept': string}?, {'name': string}?],
}

export type TStep = IOutputStep | IInputStep | IApiCallStep;