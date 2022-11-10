import { NodeType } from '../nodes/types'
import { Node } from '../nodes/node'
import { RectRender, RootRender } from './fabric'

class noopRender {}

const RenderMap = {
  [NodeType.Node]: noopRender,
  [NodeType.Rect]: RectRender,
  [NodeType.Root]: RootRender,
}

const renderMap: typeof RenderMap = {
  [NodeType.Node]: noopRender,
  [NodeType.Rect]: RectRender,
  [NodeType.Root]: RootRender,
}

export function createRender(type: NodeType, node: Node) {
  return new renderMap[type](node)
}

export * from './fabric'
