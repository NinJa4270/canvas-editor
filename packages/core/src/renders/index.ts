import { NodeType } from "../nodes/types";
import { RectRender } from "./fabric/RectRender";


const renderMap = {
    [NodeType.Rect]: RectRender
}

export function createRender(type: NodeType) {
    return new renderMap[type]()
}