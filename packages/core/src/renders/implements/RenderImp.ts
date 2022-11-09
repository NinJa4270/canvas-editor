import { Node } from '../../nodes/node'
export interface RenderImp {
  renderElement?: any
  node: Node
  render(): void
}
