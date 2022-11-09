import { Size } from '../../types'
import { NodeType } from '../types'

export interface NodeConfig {
  el: HTMLElement
  size: Size
}
export class Node {
  type = NodeType.Node
  constructor(config: NodeConfig) {}
}
