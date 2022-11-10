import { NodeType, RectNode, RootNode } from './nodes'
import { Size, Json } from './types'
interface EditorConfig {
  el: HTMLElement
  size: Size
}

/**
 * @description 编辑器类
 * @export
 * @class Editor
 */
class Editor {
  el: HTMLElement
  wrapper!: RootNode
  constructor(config: EditorConfig) {
    this.el = config.el
    this.init(config)
  }

  /**
   * @description 初始化
   */
  init(config: EditorConfig) {
    this.wrapper = new RootNode(config)
  }

  loadJSON(json: Json) {
    for (let i = 0; i < json.length; i++) {
      const element = json[i]
      switch (element.type) {
        case NodeType.Rect: {
          const node = new RectNode({
            size: element.size,
            position: element.position,
            background: element.background,
          })
          this.wrapper?.addElement(node.getRenderElement())
          break
        }
        default:
          break
      }
      this.wrapper.render()
    }
  }
}

export function createEditor(config: EditorConfig): Editor {
  const editor = new Editor(config)
  return editor
}
