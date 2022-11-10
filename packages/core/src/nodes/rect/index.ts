import { createRender, RectRender } from '../../renders'
import { Position, Size } from '../../types'
import { merge } from '../../utils'
import { Node, NodeConfig } from '../index'
import { NodeType } from '../types'

interface RectConfig {
  size?: Size
  position?: Position
  background?: string
}

const defaultOptions: NodeConfig = {
  size: {
    width: 200,
    height: 200,
  },
  position: {
    left: 200,
    top: 200,
  },
  background: 'green',
}

export class RectNode extends Node {
  type = NodeType.Rect
  _render = createRender(NodeType.Rect, this) as RectRender

  constructor(config: RectConfig) {
    const options = merge(config, defaultOptions)
    super(options)
    this.init(options)
  }

  init(config: NodeConfig) {
    this._render.createRenderElement({
      height: config.size.height,
      width: config.size.width,
      top: config.position.top,
      left: config.position.left,
      background: config.background,
    })
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
