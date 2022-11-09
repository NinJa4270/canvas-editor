import { RectRenderImp } from '../implements'
import { Render } from './Render'
import { fabric } from 'fabric'
import { Node } from '../../nodes/node'
export class RectRender extends Render implements RectRenderImp {
  renderElement?: any
  constructor(node: Node) {
    super(node)
  }

  createRenderElement() {
    const el = new fabric.Rect({
      left: 200, //距离左边的距离
      top: 200, //距离上边的距离
      fill: 'green', //填充的颜色
      width: 200, //矩形宽度
      height: 200, //矩形高度
    })
    this.renderElement = el
  }

  getRenderElement() {
    return this.renderElement
  }

  getElement() {
    return this.renderElement.wrapperEl
  }
}
