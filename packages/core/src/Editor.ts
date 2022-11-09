import { RectNode, RootNode } from './nodes'
import { Size } from './types'
import { fabric } from 'fabric'
console.log('%cEditor.ts line:4 fabric', 'color: #007acc;', fabric)
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
  wrapper?: RootNode
  constructor(config: EditorConfig) {
    this.el = config.el
    this.init()
  }

  /**
   * @description 初始化
   */
  init() {
    this.wrapper = new RootNode({
      el: this.el,
      size: {
        height: this.el.height,
        width: this.el.width,
      },
    })
  }

  loadJSON(json: any[]) {
    // const element = json[0]
    // const node = new RectNode({
    //   size: element.size,
    // })
    // node.render()
  }
}

export function createEditor(config: EditorConfig): Editor {
  const editor = new Editor(config)
  return editor
}
