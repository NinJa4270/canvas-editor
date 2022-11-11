
import { SetBackgroundCommand, SetPositionCommand, SetScaleCommand, SetSizeCommand } from "./common"
import { LoadJsonCommand } from "./canvas"
import { Node } from '../nodes'
import { hisotry } from '../Editor'

export enum CommandFlag {
    Set_Background,
    Set_Position,
    Set_Scale,
    Set_Size,
    Load_Json,
}

const CommandsList = {
    [CommandFlag.Set_Background]: SetBackgroundCommand,
    [CommandFlag.Set_Position]: SetPositionCommand,
    [CommandFlag.Set_Scale]: SetScaleCommand,
    [CommandFlag.Set_Size]: SetSizeCommand,
    [CommandFlag.Load_Json]: LoadJsonCommand,
}

export function dispatch(commandFlag: CommandFlag, node: Node, value: any, oldValue?: any) {
    const command = new CommandsList[commandFlag](node, value, oldValue)
    return hisotry.execute(command)
}
