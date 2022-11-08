import { RectRenderImp } from '../implements/RectRender'

export class RectRender implements RectRenderImp {
  constructor() {}

  render() {
    console.log('%cRectRender.ts line:7 render', 'color: #007acc;')
  }
}
