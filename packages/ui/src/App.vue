
<template>
  <div id="app">
    <div id="canvas"></div>
    <button @click="redo">redo</button>
    <button @click="undo">undo</button>
  </div>
</template>

<script>
import { createEditor, redo, undo } from '@ninja/core'
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
    editor.loadJSON(json)
    this.editor = editor
  },
  methods: {
    redo() {
      redo()
      this.editor.wrapper.render()
    },
    undo() {
      undo()
      this.editor.wrapper.render()
    },
  },
}
</script>

  