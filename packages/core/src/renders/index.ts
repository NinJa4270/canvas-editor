import { NodeType } from '../nodes/types'
import { RectRender } from './fabric/RectRender'
import { RootRender } from './fabric/RootRender'
import { Node } from '../nodes/node'
type RenderMap = { [k in NodeType]?: any }

const renderMap: RenderMap = {
  [NodeType.Rect]: RectRender,
  [NodeType.Root]: RootRender,
}

export function createRender(type: NodeType, node: Node) {
  return new renderMap[type](node)
}
