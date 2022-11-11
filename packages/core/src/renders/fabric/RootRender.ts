import { RootRenderImp } from '../implements'
import { Render } from './index'
import { Size } from '../../types'
import { Node } from '../../nodes'
import { fabric } from 'fabric'
import { debounce } from '../../utils'
import { dispatch, CommandFlag } from '../../commands'

export interface createRenderElementOptions {
  height: number
  width: number
  background: string
}
export class RootRender extends Render implements RootRenderImp {
  renderElement!: fabric.Canvas & { wrapperEl: HTMLElement }
  _render = this
  constructor(node: Node) {
    super(node)
  }

  createRenderElement(el: HTMLElement, options: createRenderElementOptions) {
    const canvas: any = new fabric.Canvas('c', {
      ...options,
      backgroundColor: options.background,
    })
    el.append(canvas.wrapperEl)
    this.renderElement = canvas
    this.initEvent()
  }

  // 内部事件
  initEvent() {
    const movingFn = debounce(this.resolveEvent, 500)
    const scalingFn = debounce(this.resolveEvent, 500)
    // 移动
    this.renderElement.on('object:moving', movingFn)
    // 控制器
    this.renderElement.on('object:scaling', scalingFn)
  }

  resolveEvent(e: fabric.IEvent<Event>) {
    const target = e.target as fabric.Object & { node: Node }
    const transform = e.transform as any
    switch (transform.action) {
      // 内部触发移动事件
      case 'drag': {
        const { left, top } = target.getBoundingRect()
        dispatch(CommandFlag.Set_Position, target.node, {
          left,
          top,
        })
        break
      }
      // 内部触发缩放事件
      case 'scale':
        {
          dispatch(CommandFlag.Set_Scale, target.node, {
            scaleX: target.scaleX!,
            scaleY: target.scaleY!,
          })
        }
        break
      default:
        break
    }
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
