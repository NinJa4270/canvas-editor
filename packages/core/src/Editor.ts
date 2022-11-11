import { Command } from './commands/CommandImp'
import { createHistory, History } from './history'
import { RootNode } from './nodes'
import { Size } from './types'
interface EditorConfig {
  el: HTMLElement
  size: Size
}

export let context: RootNode
export let hisotry: History

/**
 * @description 编辑器类
 * @export
 * @class Editor
 */
class Editor {
  el: HTMLElement
  context!: RootNode
  hisotry!: History
  constructor(config: EditorConfig) {
    this.el = config.el
    this.init(config)
  }

  /**
   * @description 初始化
   */
  init(config: EditorConfig) {
    this.context = new RootNode(config)
    context = Command.context = this.context
    hisotry = this.hisotry = createHistory(this.context)
  }
}

export function createEditor(config: EditorConfig): Editor {
  const editor = new Editor(config)
  return editor
}
