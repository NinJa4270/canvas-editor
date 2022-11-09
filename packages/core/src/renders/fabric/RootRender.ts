import { RectRenderImp } from '../implements/RectRender'
import { Render } from './Render'
import { fabric } from 'fabric'
import { Size } from '../../types'
export class RootRender extends Render implements RectRenderImp {
  el?: any
  constructor() {
    super()
  }

  createEl(el: HTMLElement, size: Size, id: string) {
    const canvas = new fabric.Canvas(id)
    this.el = canvas
    el.append(this.el.wrapperEl)
    this.setSize(size)
    return this.el
  }

  setSize(size: Size) {
    this.el.setWidth(size.width)
    this.el.setHeight(size.height)
  }

  render(): void {}
}
