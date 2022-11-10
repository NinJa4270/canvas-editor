import { createRender } from '../../renders'
import { RootRender } from '../../renders/fabric'
import { Size } from '../../types'
import { merge } from '../../utils'
import { Node, NodeConfig } from '../node'
import { NodeType } from '../types'

export interface RootNodeConfig {
  el: HTMLElement
  size?: Size
}

const defaultOptions: NodeConfig = {
  size: {
    width: 1000,
    height: 500,
  },
  position: {
    left: 200,
    top: 200,
  },
  background: '#eee',
}

export class RootNode extends Node {
  type = NodeType.Root
  _render = createRender(NodeType.Root, this) as RootRender

  constructor(config: RootNodeConfig) {
    const options = merge(config, defaultOptions)
    console.log('%cindex.ts line:31 options', 'color: #007acc;', options)
    super(options)
    this.init(options)
  }

  init(config: NodeConfig & RootNodeConfig) {
    this._render.createRenderElement(config.el, {
      height: config.size.height,
      width: config.size.width,
      background: config.background,
    })
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
