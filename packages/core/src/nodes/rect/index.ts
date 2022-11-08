import { createRender } from "../../renders"
import { NodeConfig, Node } from "../node"
import { NodeType } from "../types"

interface RectConfig extends NodeConfig { }

export class RectNode extends Node {
    type = NodeType.Rect
    _render = createRender(NodeType.Rect)
    constructor(config: RectConfig) {
        super({ size: config.size })
    }

    render() {
        this._render.render()
    }
}
