import { Size } from "../../types"
import { NodeType } from "../types"

export interface NodeConfig {
    size: Size
}
export class Node {
    type = NodeType.Node
    constructor(config: NodeConfig) { }
}