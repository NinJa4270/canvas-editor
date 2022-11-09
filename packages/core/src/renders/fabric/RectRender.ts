import { RectRenderImp } from '../implements/RectRender'
import { Render } from './Render'
import { fabric } from 'fabric'

export class RectRender extends Render implements RectRenderImp {
  el?: any
  constructor() {
    super()
  }

  createEl() {
    const el = new fabric.Rect({
      left: 200, //距离左边的距离
      top: 200, //距离上边的距离
      fill: 'green', //填充的颜色
      width: 200, //矩形宽度
      height: 200, //矩形高度
    })

    return el
  }

  render(): void {}
}
