declare interface ICanvasCircle {
    name: string,
    centerX: number,
    centerY: number,
    radius: number
}

declare interface ICanvasEllipse {
    name: string,
    centerX: number,
    centerY: number,
    semiMajorAxis: number,
    semiMinorAxis: number,
    rotation: number
}

declare interface ICanvasHyperbola {
    name: string,
    centerX: number,
    centerY: number,
    semiMajorAxis: number,
    semiMinorAxis: number,
    rotation: number
}