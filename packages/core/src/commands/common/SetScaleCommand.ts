import { Node } from '../../nodes'
import { Scale } from '../../types'
import { Command } from '../CommandImp'

export class SetScaleCommand extends Command {
  value: Scale
  oldValue: Scale
  target: Node
  constructor(target: Node, value: Scale, oldValue?: Scale) {
    super()
    this.target = target
    this.value = value
    this.oldValue = oldValue ? oldValue : target.getScale()!
  }
  execute() {
    this.target.setScale(this.value)
  }
  undo() {
    this.target.setScale(this.oldValue)
  }
}
