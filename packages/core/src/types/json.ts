import { Position, Size } from '.'
import { NodeType } from '../nodes'

type ChildNode = Rect

interface Rect {
  type: NodeType.Rect
  size: Size
  position: Position
  background: string
  children: ChildNode[]
}

export type Json = ChildNode[]
