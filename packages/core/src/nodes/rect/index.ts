import { createRender, RectRender } from '../../renders'
import { Position, Scale, Size } from '../../types'
import { merge } from '../../utils'
import { Node, NodeConfig } from '../index'
import { NodeType } from '../types'

interface RectConfig {
  size?: Size
  position?: Position
  background?: string
  scale?: Scale
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
  scale: {
    scaleX: 1,
    scaleY: 1,
  },
  background: 'green',
}

export class RectNode extends Node {
  type = NodeType.Rect
  _render = createRender(this) as RectRender

  constructor(config: RectConfig) {
    const options = merge(config, defaultOptions)
    super(options)
    this.init(options)
  }

  init(config: NodeConfig) {
    this._render.createRenderElement({
      node: this,
      height: config.size!.height,
      width: config.size!.width,
      top: config.position.top,
      left: config.position.left,
      scaleX: config.scale!.scaleX,
      scaleY: config.scale!.scaleY,
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

  setScaleX(scaleX: number) {
    this._render.setScaleX(scaleX)
    super.setScaleX(scaleX)
  }

  setScaleY(scaleY: number) {
    this._render.setScaleY(scaleY)
    super.setScaleY(scaleY)
  }

  setScale(scale: Scale) {
    this._render.setScale(scale)
    super.setScale(scale)
  }
}
