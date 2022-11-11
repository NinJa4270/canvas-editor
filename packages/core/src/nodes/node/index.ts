import { Position, Size, Scale } from '../../types'
import { NodeType } from '../types'

export interface NodeConfig {
  size: Size
  position: Position
  scale?: Scale
  background: string
}

export abstract class Node {
  type = NodeType.Node
  size: Size
  background: string
  position: Position
  scale?: Scale
  constructor(config: NodeConfig) {
    this.size = config.size
    this.position = config.position
    this.background = config.background
    this.scale = config.scale
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

  setScaleX(scaleX: number) {
    this.scale!.scaleX = scaleX
  }

  setScaleY(scaleY: number) {
    this.scale!.scaleY = scaleY
  }

  setScale(scale: Scale) {
    this.scale! = scale
  }

  getScaleX() {
    return this.scale!.scaleX
  }
  getScaleY() {
    return this.scale!.scaleY
  }
  getScale() {
    return this.scale
  }
}
