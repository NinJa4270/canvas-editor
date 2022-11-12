import { Position, Size } from '.'
import { NodeType } from '../nodes'

type ChildJsonNode = RectJsonNode | CircleJsonNode

interface BaseJsonNode {
  type: NodeType.Rect | NodeType.Circle
  position: Position
  background: string
  children: ChildNode[]
}

interface RectJsonNode extends BaseJsonNode {
  type: NodeType.Rect
  size: Size
}
interface CircleJsonNode extends BaseJsonNode {
  type: NodeType.Circle
  radius: number
}
export type Json = ChildJsonNode[]
