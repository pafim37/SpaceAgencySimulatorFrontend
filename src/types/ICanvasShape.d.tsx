interface ICanvas {
    width: number,
    height: number,
    color: string,
    name: string,
    centerX: number,
    centerY: number,
}
declare interface ICanvasCircle extends ICanvas {
    radius: number
}

declare interface ICanvasEllipse extends ICanvas {
    semiMajorAxis: number,
    semiMinorAxis: number,
    rotation: number
}

declare interface ICanvasHyperbola extends ICanvas {
    semiMajorAxis: number,
    semiMinorAxis: number,
    rotation: number
}