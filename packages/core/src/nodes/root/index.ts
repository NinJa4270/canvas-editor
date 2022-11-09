import { createRender } from '../../renders'
import { Node, NodeConfig } from '../node'
import { NodeType } from '../types'

interface RootNodeConfig extends NodeConfig {
  el: HTMLElement
}

export class RootNode extends Node {
  type = NodeType.Root
  _render = createRender(NodeType.Root)
  el: any
  constructor(config: RootNodeConfig) {
    super({ size: config.size })
    this.el = this._render.createEl(config.el, config.size, 'canvas')
  }
}
