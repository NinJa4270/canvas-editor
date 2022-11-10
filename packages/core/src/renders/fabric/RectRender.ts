import { RectRenderImp } from '../implements'
import { Render } from './index'
import { Node } from '../../nodes'
import { Position, Size } from '../../types'
import { fabric } from 'fabric'

interface createRenderElementOptions {
  height: number
  width: number
  top: number
  left: number
  background: string
}

export class RectRender extends Render implements RectRenderImp {
  renderElement!: fabric.Rect

  constructor(node: Node) {
    super(node)
  }

  createRenderElement(config: createRenderElementOptions) {
    this.renderElement = new fabric.Rect({
      ...config,
      fill: config.background,
    })
  }

  getRenderElement() {
    return this.renderElement
  }

  set(key: keyof fabric.Rect, value: any) {
    this.renderElement.set(key, value)
  }

  setWidth(width: Size['width']) {
    this.set('width', width)
  }
  setHeight(height: Size['height']) {
    this.set('height', height)
  }

  setSize(size: Size) {
    this.setWidth(size.width)
    this.setHeight(size.height)
  }

  setBackground(color: string) {
    this.set('fill', color)
  }

  setTop(top: Position['top']) {
    this.set('top', top)
  }

  setLeft(left: Position['left']) {
    this.set('left', left)
  }

  setPosition(position: Position) {
    this.setTop(position.top)
    this.setLeft(position.left)
  }
}
