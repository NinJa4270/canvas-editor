import { RectNode } from './nodes'
import { Size } from './types'

interface EditorConfig {
  el: HTMLCanvasElement
  size: Size
}

/**
 * @description 编辑器类
 * @export
 * @class Editor
 */
class Editor {
  el: HTMLCanvasElement
  constructor(config: EditorConfig) {
    this.el = config.el
  }

  loadJSON(json: any[]) {
    const element = json[0]
    const node = new RectNode({
      size: element.size,
    })
    node.render()
  }
}

export function createEditor(config: EditorConfig): Editor {
  const editor = new Editor(config)
  return editor
}
