import { Node } from '../../nodes'
import { Command } from '../CommandImp'
export class SetBackgroundCommand extends Command {
  value: string
  oldValue: string
  target: Node
  constructor(target: Node, value: string) {
    super()
    this.target = target
    this.value = value
    this.oldValue = target.getBackground()
  }
  execute() {
    this.target.setBackground(this.value)
  }
  undo() {
    this.target.setBackground(this.oldValue)
  }
}
