import { NodeType, RectNode, RootNode } from './nodes'
import { Size, Json } from './types'
import { SetSizeCommand, SetBackgroundCommand } from './commands'
import { execute, redo, undo } from './history'
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
          if (i === 0) {
            // 命令模式调用
            // node.setSize({
            //   height: 300,
            //   width: 1000
            // })
            const command = new SetSizeCommand(node, {
              height: 300,
              width: 1000,
            })
            execute(command)

            // setTimeout(() => {
            //   undo()
            //   this.wrapper.render()
            // }, 1000)

            // setTimeout(() => {
            //   redo()
            //   this.wrapper.render()
            // }, 2000);

            setTimeout(() => {
              const command1 = new SetBackgroundCommand(node, '#FFF020')
              execute(command1)
              this.wrapper.render()
            }, 1000)

            setTimeout(() => {
              undo()
              this.wrapper.render()
            }, 2000)
          }
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
