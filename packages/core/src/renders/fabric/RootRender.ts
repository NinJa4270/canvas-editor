import { RectRenderImp } from '../implements/RectRender'
import { Render } from './Render'

export class RootRender extends Render implements RectRenderImp {
  constructor() {
    super()
    this.createEl()
  }

  createEl() {}

  render(): void {}
}
