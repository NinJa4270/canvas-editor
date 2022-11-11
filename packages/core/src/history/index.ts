import { Command } from '../commands/CommandImp'

export const redoStack: Command[] = []
export const undoStack: Command[] = []

export function execute(cmd: Command) {
  cmd.execute()
  undoStack.push(cmd)
  redoStack.length = 0
}

export function undo() {
  const cmd = undoStack.pop()
  if (cmd) {
    cmd.undo()
    redoStack.push(cmd)
  }
}

export function redo() {
  const cmd = redoStack.pop()
  if (cmd) {
    cmd.execute()
    undoStack.push(cmd)
  }
}
