import { createRender } from '../../renders'
import { Node, NodeConfig } from '../node'
import { NodeType } from '../types'

interface RootNodeConfig extends NodeConfig {}

export class RootNode extends Node {
  type = NodeType.Root
  _render = createRender(NodeType.Root)

  constructor(config: RootNodeConfig) {
    super({ el: config.el, size: config.size })
  }
}
