export default class Box {
  width: number
  height: number
  x: number
  y: number

  constructor(box: Box) {
    this.height = box.height
    this.width = box.width
    this.x = box.x
    this.y = box.y
  }

  isValidated?: Function = () => {
    return this.width !== 0 && this.height !== 0 && this.x && this.y
  }

  static generateBox: Function = () => {
    return new Box({
      width: 0,
      height: 0,
      x: 0,
      y: 0
    })
  }
}