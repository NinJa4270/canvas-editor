import { createRender } from '../../renders'
import { RootRender } from '../../renders/fabric'
import { Node, NodeConfig } from '../node'
import { NodeType } from '../types'

interface RootNodeConfig extends NodeConfig {
  el: HTMLElement
}

export class RootNode extends Node {
  type = NodeType.Root
  _render = createRender(NodeType.Root, this) as RootRender

  constructor(config: RootNodeConfig) {
    super({ size: config.size })
    this.init(config)
  }

  init(config: RootNodeConfig) {
    this._render.createRenderElement(config.el, config.size, 'canvas')
  }

  getRenderElement() {
    return this._render.getRenderElement()
  }

  addElement(el: any) {
    return this._render.addElement(el)
  }

  render() {
    this._render.render()
  }
}
