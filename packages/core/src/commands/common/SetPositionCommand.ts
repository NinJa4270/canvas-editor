import { Node } from '../../nodes'
import { Position } from '../../types'
import { Command } from '../CommandImp'

export class SetPositionCommand extends Command {
  value: Position
  oldValue: Position
  target: Node
  constructor(target: Node, value: Position, oldValue?: Position) {
    super()
    this.target = target
    this.value = value
    this.oldValue = oldValue ? oldValue : target.getPosition()
  }
  execute() {
    this.target.setPosition(this.value)
  }
  undo() {
    this.target.setPosition(this.oldValue)
  }
}
