import { RootRenderImp } from '../implements'
import { Render } from './index'
import { Size } from '../../types'
import { Node } from '../../nodes'
import { fabric } from 'fabric'

export class RootRender extends Render implements RootRenderImp {
  renderElement?: any
  constructor(node: Node) {
    super(node)
  }

  createRenderElement(el: HTMLElement, size: Size, id: string) {
    const canvas: any = new fabric.Canvas(id, {
      backgroundColor: '#eee',
    })
    el.append(canvas.wrapperEl)
    this.renderElement = canvas
    this.setSize(size)
  }

  /**
   * @description 设置画布大小
   * @param {Size} size
   */
  setSize(size: Size) {
    this.renderElement.setWidth(size.width)
    this.renderElement.setHeight(size.height)
  }

  /**
   * @description 获取render对象
   */
  getRenderElement() {
    return this.renderElement
  }

  /**
   * @description 获取真实dom元素
   */
  getElement() {
    return this.renderElement.wrapperEl
  }

  /**
   * @description 添加元素
   * @param {*} el
   */
  addElement(el: any) {
    this.renderElement.add(el)
  }

  // 刷新
  render() {
    this.renderElement.renderAll()
  }
}
