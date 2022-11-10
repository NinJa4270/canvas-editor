import { Position, Size } from '../../types'
import { NodeType } from '../types'

export interface NodeConfig {
  size: Size
}
export class Node {
  type = NodeType.Node
  size: Size
  background?: string
  position: Position = {
    left: 0,
    top: 0,
  }
  constructor(config: NodeConfig) {
    this.size = config.size
  }

  setSize(size: Size) {
    this.size = size
  }

  getHeight() {
    return this.size.height
  }

  getWidth() {
    return this.size.width
  }

  getSize() {
    return this.size
  }

  setBackground(color: string) {
    this.background = color
  }

  getBackground() {
    return this.background
  }

  setTop(top: Position['top']) {
    this.position.top = top
  }

  getTop() {
    return this.position.top
  }

  setLeft(left: Position['left']) {
    this.position.left = left
  }

  getLeft() {
    return this.position.left
  }

  setPosition(position: Position) {
    this.position = position
  }

  getPosition() {
    return this.position
  }
}
