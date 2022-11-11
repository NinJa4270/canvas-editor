
<template>
  <div id="app">
    <div id="canvas"></div>
    <button @click="redo">redo</button>
    <button @click="undo">undo</button>
  </div>
</template>

<script>
import { createEditor, dispatch, CommandFlag } from '@ninja/core'
export default {
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    const editor = createEditor({
      el: document.getElementById('canvas'),
    })
    const json = [
      {
        type: 4,
        size: {
          height: 100,
          width: 100,
        },
      },
      {
        type: 4,
        size: {
          height: 300,
          width: 50,
        },
        position: {
          top: 0,
          left: 0,
        },
        background: '#FF0',
      },
    ]
    this.editor = editor
    this.redoStackLength = this.editor.hisotry.redoStack.length
    this.undoStackLength = this.editor.hisotry.undoStack.length
    dispatch(CommandFlag.Load_Json, editor.context, json)
  },
  methods: {
    redo() {
      this.editor.hisotry.redo()
    },
    undo() {
      this.editor.hisotry.undo()
    },
  },
}
</script>

  