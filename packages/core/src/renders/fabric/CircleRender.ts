import { fabric } from "fabric";
import { CircleNode, EditorNode } from "../../nodes";
import { Position, Scale } from "../../types";
import { CircleRenderImp } from "../implements";
import { Render } from "./Render";


interface createRenderElementOptions {
    node: CircleNode
    radius: number
    top: number
    left: number
    scaleX: number
    scaleY: number
    background: string
}

export class CircleRender extends Render implements CircleRenderImp {
    renderElement!: fabric.Circle

    constructor(node: EditorNode) {
        super(node)
    }

    createRenderElement(config: createRenderElementOptions) {
        this.renderElement = new fabric.Circle({
            ...config,
            fill: config.background,
        })
    }

    getRenderElement() {
        return this.renderElement
    }

    set(key: keyof fabric.Circle, value: any) {
        this.renderElement.set(key, value)
    }

    setRadius(radius: number) {
        this.set('radius', radius)
    }

    setBackground(color: string) {
        this.set('fill', color)
    }

    setTop(top: Position['top']) {
        this.set('top', top)
    }

    setLeft(left: Position['left']) {
        this.set('left', left)
    }

    setPosition(position: Position) {
        this.setTop(position.top)
        this.setLeft(position.left)
    }

    setScale(scale: Scale) {
        console.log('%cRectRender.ts line:71 renderElement', 'color: #007acc;', this.renderElement)
    }

    setScaleX(scaleX: number) {
        console.log('%cRectRender.ts line:71 renderElement', 'color: #007acc;', this.renderElement)
    }

    setScaleY(scaleY: number) {
        console.log('%cRectRender.ts line:71 renderElement', 'color: #007acc;', this.renderElement)
    }
}