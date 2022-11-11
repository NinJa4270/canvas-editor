import { Node, RootNode } from './../nodes'
export interface CommandImp {
  value: any
  oldValue: any
  execute(): void
  undo(): void
}

export abstract class Command implements CommandImp {
  value: any
  oldValue: any
  static context: RootNode
  execute() {}
  undo() {}
}
