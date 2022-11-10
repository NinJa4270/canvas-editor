import { CommandImp } from '../CommandImp'
import { Node } from '../../nodes'
import { Size } from '../../types'
export class SetSizeCommand implements CommandImp {
  value: any
  oldValue: any
  target: Node
  constructor(target: Node, value: Size) {
    this.target = target
    this.value = value
    this.oldValue = target.getSize()
  }
  execute() {
    this.target.setSize(this.value)
  }
  undo() {
    this.target.setSize(this.oldValue)
  }
  redo() {}
}
