import { RectRenderImp } from '../implements'
import { Render } from './index'
import { Node } from '../../nodes'
import { Position, Size } from '../../types'
import { fabric } from 'fabric'
export class RectRender extends Render implements RectRenderImp {
  renderElement!: fabric.Rect
  constructor(node: Node) {
    super(node)
  }

  createRenderElement() {
    this.renderElement = new fabric.Rect({
      left: 200, //距离左边的距离
      top: 200, //距离上边的距离
      fill: 'green', //填充的颜色
      width: 200, //矩形宽度
      height: 200, //矩形高度
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
