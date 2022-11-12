import { CircleNode, EditorNode, Node, NodeType, RectNode } from '../../nodes'
import { Json } from '../../types'
import { Command } from '../CommandImp'
export class LoadJsonCommand extends Command {
  value: Json
  oldValue: Json
  target: Node
  constructor(target: Node, value: Json, oldValue: Json) {
    super()
    this.target = target
    this.value = value
    this.oldValue = []
  }
  execute() {
    for (let i = 0; i < this.value.length; i++) {
      const element = this.value[i]
      switch (element.type) {
        case NodeType.Rect: {
          const node = new RectNode({
            size: element.size,
            position: element.position,
            background: element.background,
          })
          Command.context.addElement(node.getRenderElement())
          break
        }
        case NodeType.Circle: {
          const node = new CircleNode({
            radius: element.radius,
            position: element.position,
            background: element.background,
          })
          Command.context.addElement(node.getRenderElement())
          break
        }
        default:
          break
      }
    }
  }
  undo() { }

  addElement(node: EditorNode) {
    Command.context.addElement(node.getRenderElement())
  }
}
