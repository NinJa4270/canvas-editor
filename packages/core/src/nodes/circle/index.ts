import { CircleRender, createRender } from '../../renders'
import { Position, Scale } from '../../types'
import { merge } from '../../utils'
import { Node, NodeConfig } from '../index'
import { NodeType } from '../types'

interface CircleConfig {
    position?: Position,
    radius?: number,
    scale?: Scale,
    background?: string
}

const defaultOptions: NodeConfig = {
    position: {
        left: 200,
        top: 200,
    },
    scale: {
        scaleX: 1,
        scaleY: 1,
    },
    radius: 10,
    background: 'green',
}

export class CircleNode extends Node {
    type = NodeType.Circle
    _render = createRender(this) as CircleRender

    constructor(config: CircleConfig) {
        const options = merge(config, defaultOptions)
        super(options)
        this.init(options)
    }

    init(config: NodeConfig) {
        this._render.createRenderElement({
            node: this,
            top: config.position.top,
            left: config.position.left,
            radius: config.radius!,
            scaleX: config.scale!.scaleX,
            scaleY: config.scale!.scaleY,
            background: config.background,
        })
    }

    getRenderElement() {
        return this._render.getRenderElement()
    }

    setRadius(radius: number) {
        this._render.setRadius(radius)
        super.setRadius(radius)
    }

    setBackground(color: string) {
        this._render.setBackground(color)
        super.setBackground(color)
    }

    setTop(top: Position['top']) {
        this._render.setTop(top)
        super.setTop(top)
    }

    setLeft(left: Position['left']) {
        this._render.setLeft(left)
        super.setLeft(left)
    }

    setPosition(position: Position) {
        this._render.setPosition(position)
        super.setPosition(position)
    }

    setScaleX(scaleX: number) {
        this._render.setScaleX(scaleX)
        super.setScaleX(scaleX)
    }

    setScaleY(scaleY: number) {
        this._render.setScaleY(scaleY)
        super.setScaleY(scaleY)
    }

    setScale(scale: Scale) {
        this._render.setScale(scale)
        super.setScale(scale)
    }
}
