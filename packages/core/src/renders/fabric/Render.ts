import { RenderImp } from '../implements/RenderImp'
import { Node } from '../../nodes'
export class Render implements RenderImp {
  renderElement?: any
  node: Node
  constructor(node: Node) {
    this.node = node
  }
  render() {}
}
