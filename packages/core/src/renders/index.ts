import { NodeType } from '../nodes/types'
import { RectRender } from './fabric/RectRender'
import { RootRender } from './fabric/RootRender'

type RenderMap = { [k in NodeType]?: any }

const renderMap: RenderMap = {
  [NodeType.Rect]: RectRender,
  [NodeType.Root]: RootRender,
}

export function createRender(type: NodeType) {
  return new renderMap[type]()
}
