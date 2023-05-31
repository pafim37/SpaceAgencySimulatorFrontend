/*
 * IOrbit interface should be compatible with OrbitDTO.cs
 */

declare interface IOrbit {
    name: string,
    orbitType: number,
    center: IVector,
    semiMajorAxis: number,
    semiMinorAxis: number,
    rotation: number
}