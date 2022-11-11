import { Command } from '../commands/CommandImp'
import { RootNode } from '../nodes'

export interface History {
  execute(cmd: Command): void
  undo(): void
  redo(): void
  redoStack: Command[]
  undoStack: Command[]
}


export function createHistory(context: RootNode): History {
  const redoStack: Command[] = []
  const undoStack: Command[] = []

  function execute(cmd: Command) {
    cmd.execute()
    undoStack.push(cmd)
    redoStack.length = 0
    context.render()
  }

  function undo() {
    const cmd = undoStack.pop()
    if (cmd) {
      cmd.undo()
      redoStack.push(cmd)
      context.render()
    }
  }

  function redo() {
    const cmd = redoStack.pop()
    if (cmd) {
      cmd.execute()
      undoStack.push(cmd)
      context.render()
    }
  }

  return {
    execute,
    undo,
    redo,
    redoStack,
    undoStack
  }
}