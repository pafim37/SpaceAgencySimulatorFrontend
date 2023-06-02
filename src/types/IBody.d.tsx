declare interface IBody {
    name: string,
    mass: number,
    radius: number,
    position: IVector,
    velocity: IVector
}

declare interface IVector {
    x: number,
    y: number,
    z: number
}