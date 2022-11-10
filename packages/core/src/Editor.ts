import { RectNode, RootNode } from './nodes'
import { Size } from './types'
interface EditorConfig {
  el: HTMLElement
  size: Size
}

const DefaultOptions = {
  height: 500,
  width: 1000,
}

/**
 * @description 编辑器类
 * @export
 * @class Editor
 */
class Editor {
  el: HTMLElement
  wrapper!: RootNode
  size: Size
  constructor(config: EditorConfig) {
    this.el = config.el
    this.size = config.size
    this.init()
  }

  /**
   * @description 初始化
   */
  init() {
    this.wrapper = new RootNode({
      el: this.el,
      size: {
        height: this.size.height || DefaultOptions.height,
        width: this.size.width || DefaultOptions.width,
      },
    })
  }

  loadJSON(json: any[]) {
    const element = json[0]
    const node = new RectNode({
      size: element.size,
    })
    this.wrapper?.addElement(node.getRenderElement())
    setTimeout(() => {
      // node.setSize({
      //   height: 50,
      //   width: 50
      // })
      // node.setBackground('#000')
      // node.setTop(0)
      // node.setLeft(0)
      // node.setPosition({
      //   top: 100,
      //   left: 500
      // })

      this.wrapper.render()
    }, 500)
  }
}

export function createEditor(config: EditorConfig): Editor {
  const editor = new Editor(config)
  return editor
}
