import { Node, NodeConfig } from "../node";
import { NodeType } from "../types";

interface RootNodeConfig extends NodeConfig { }

export class RootNode extends Node {
    type = NodeType.Root
    constructor(config: RootNodeConfig) {
        super({ size: config.size })
    }
}
