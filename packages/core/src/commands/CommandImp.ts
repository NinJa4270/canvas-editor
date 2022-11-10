export interface CommandImp {
  value: any
  oldValue: any
  execute(): void
  undo(): void
  redo(): void
}
