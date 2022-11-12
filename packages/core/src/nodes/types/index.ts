import { CircleNode } from "../circle";
import { RectNode } from "../rect";
import { RootNode } from "../root";

export const enum NodeType {
  Node = 'node',
  Root = 'root',
  Rect = 'rect',
  Circle = 'circle'
}

export type EditorNode = RectNode | CircleNode | RootNode