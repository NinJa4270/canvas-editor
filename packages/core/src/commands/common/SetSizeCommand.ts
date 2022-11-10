import { Node } from '../../nodes'
import { Size } from '../../types'
import { Command } from '../CommandImp'
export class SetSizeCommand extends Command {
  value: Size
  oldValue: Size
  target: Node
  constructor(target: Node, value: Size) {
    super()
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
}
