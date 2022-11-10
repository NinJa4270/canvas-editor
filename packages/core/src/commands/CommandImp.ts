import { Node } from './../nodes'
export interface CommandImp {
  value: any
  oldValue: any
  execute(): void
  undo(): void
}

export abstract class Command implements CommandImp {
  value: any
  oldValue: any
  target!: Node
  execute() {}
  undo() {}
}
