import { EditorNode } from '../../nodes'
import { RenderImp } from '../implements/RenderImp'
export abstract class Render implements RenderImp {
  renderElement?: any
  node: EditorNode
  constructor(node: EditorNode) {
    this.node = node
  }
  render() { }
}
