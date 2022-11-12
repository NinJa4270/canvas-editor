import { RectRender, RootRender, CircleRender } from './fabric'
import { EditorNode, NodeType } from '../nodes'

class noopRender { }

const RenderMap = {
  [NodeType.Node]: noopRender,
  [NodeType.Rect]: RectRender,
  [NodeType.Root]: RootRender,
  [NodeType.Circle]: CircleRender,
}

const renderMap: typeof RenderMap = {
  [NodeType.Node]: noopRender,
  [NodeType.Rect]: RectRender,
  [NodeType.Root]: RootRender,
  [NodeType.Circle]: CircleRender,
}


export function createRender(node: EditorNode) {
  return new renderMap[node.type](node)
}

export * from './fabric'
