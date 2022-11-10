import { createRender, RectRender } from '../../renders'
import { Position, Size } from '../../types'
import { NodeConfig, Node } from '../index'
import { NodeType } from '../types'

interface RectConfig extends NodeConfig {}

export class RectNode extends Node {
  type = NodeType.Rect
  _render = createRender(NodeType.Rect, this) as RectRender

  constructor(config: RectConfig) {
    super({ size: config.size })
    this.init()
  }

  init() {
    this._render.createRenderElement()
  }

  getRenderElement() {
    return this._render.getRenderElement()
  }

  setSize(size: Size) {
    this._render.setSize(size)
    super.setSize(size)
  }

  setBackground(color: string) {
    this._render.setBackground(color)
    super.setBackground(color)
  }

  setTop(top: Position['top']) {
    this._render.setTop(top)
    super.setTop(top)
  }

  setLeft(left: Position['left']) {
    this._render.setLeft(left)
    super.setLeft(left)
  }

  setPosition(position: Position) {
    this._render.setPosition(position)
    super.setPosition(position)
  }
}
